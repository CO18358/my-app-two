import { Component, OnInit } from '@angular/core';
import {
  ExerciseDifficulty,
  ExerciseMuscle,
  ExerciseType,
} from 'src/app/helpers/exercise';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { Utils } from 'src/app/shared/utilties';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
})
export class ExercisesComponent implements OnInit {
  showSpinner!: boolean;

  query: string = '';
  offset: number = 0;
  exercises!: any[];

  selectedType: string = '';
  types = ExerciseType;

  selectedMuscle: string = '';
  muscles = ExerciseMuscle;

  selectedLevel: string = '';
  levels = ExerciseDifficulty;

  constructor(private exerciseService: ExercisesService) {}

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises() {
    this.showSpinner = true;
    this.exerciseService
      .getExercises(
        this.query,
        this.selectedType,
        this.selectedMuscle,
        this.selectedLevel,
        this.offset
      )
      .subscribe((res) => {
        this.exercises = res
          .map((ex) => {
            const colors = Utils.randomColor();
            ex.text = colors.color;
            ex.bg = colors.backgroundColor;
            return ex;
          })
          .sort((a, b) => a.instructions.length - b.instructions.length);
        this.showSpinner = false;
      });
  }

  prevPage() {
    if (this.offset > 0) {
      this.offset--;
      this.getExercises();
    }
  }

  nextPage() {
    this.offset++;
    this.getExercises();
  }
}
