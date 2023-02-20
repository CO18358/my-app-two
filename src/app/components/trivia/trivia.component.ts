import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MatSliderChange } from '@angular/material/slider';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  TriviaQuestion,
  TriviaQuestionDecoded,
} from 'src/app/helpers/interfaces';
import { TriviaService } from 'src/app/services/trivia/trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss'],
})
export class TriviaComponent implements OnInit, OnDestroy {
  // MENU
  amount: number = 10;
  difficulty!: string;
  type!: string;

  // QUESTIONS
  loader!: boolean;
  questions!: TriviaQuestionDecoded[];
  index: number = 0;
  POSITIVE = 4;
  NEGATIVE = 1;

  // SCORE
  selectedValue!: string | null;
  highestScore: number = this.amount * this.POSITIVE;
  score: number = 0;
  showResult!: boolean;

  // TIMER
  minutes!: number;
  seconds!: number;
  intervalId = 0;

  trivia$!: Subscription;
  constructor(private trivia: TriviaService, private router: Router) {}
  ngOnDestroy(): void {
    this.clearTimer();
    this.trivia$ && this.trivia$.unsubscribe();
  }

  ngOnInit() {}

  unselect(event: any, value: string) {
    event.preventDefault();
    this.selectedValue = this.selectedValue === value ? null : value;
  }

  nextQue() {
    this.index++;
    this.selectedValue = null;
  }

  prevQue() {
    this.index--;
    this.selectedValue = null;
  }

  home() {
    this.router.navigateByUrl('/dashboard');
  }

  reset() {
    this.score = 0;
    this.index = 0;
    this.difficulty = '';
    this.type = '';
    this.questions = [];
    this.selectedValue = null;
    this.showResult = false;
    this.clearTimer();
  }

  clearTimer() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  countDown() {
    this.intervalId = window.setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          this.clearTimer();
          this.showResult = true;
        } else {
          this.seconds = 59;
          this.minutes--;
        }
      }
    }, 1000);
  }

  matchAnswer() {
    if (!!this.selectedValue) {
      this.score =
        this.selectedValue == this.questions[this.index].answer
          ? this.score + this.POSITIVE
          : this.score - this.NEGATIVE;
    }
    this.selectedValue = null;
    if (this.index < this.questions.length - 1) {
      this.index++;
    } else {
      this.showResult = true;
      this.clearTimer();
    }
  }

  setAmount(event: MatSliderChange) {
    if (event.value) {
      this.amount = event.value;
      this.highestScore = event.value * this.POSITIVE;
    }
  }

  setType(event: MatRadioChange) {
    this.type = event.value;
  }

  setDifficulty(event: MatRadioChange) {
    this.difficulty = event.value;
  }

  getTrivia() {
    this.loader = true;

    this.trivia$ = this.trivia
      .getQuestions(this.amount, this.difficulty, this.type)
      .subscribe((res) => {
        this.questions = res.map((obj: TriviaQuestion) => {
          let que: TriviaQuestionDecoded = {
            category: decodeURIComponent(obj.category),
            type: decodeURIComponent(obj.type),
            difficulty: decodeURIComponent(obj.difficulty),
            question: decodeURIComponent(obj.question),
            answer: decodeURIComponent(obj.correct_answer),
            options: [
              ...obj.incorrect_answers.map((str) => decodeURIComponent(str)),
              decodeURIComponent(obj.correct_answer),
            ].sort(),
          };
          return que;
        });

        this.minutes = Math.floor((this.amount * 10) / 60);
        this.seconds = (this.amount * 10) % 60;
        if (this.intervalId === 0) {
          this.countDown();
        }
        // console.log(this.questions);
        this.loader = false;
      });
  }
}
