import { Component, OnInit } from '@angular/core';
import { FitnessService } from 'src/app/services/fitness/fitness.service';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss'],
})
export class FitnessComponent implements OnInit {
  genders = ['male', 'female'];
  gender = this.genders[0];
  age!: number;
  height!: number;
  weight!: number;
  neck!: number;
  waist!: number;
  hip: number | undefined;
  activities = ['sedentary', 'light', 'moderate', 'active', 'extreme'];
  activity = this.activities[0];
  goals = [
    'balance',
    'mildWeightLoss',
    'mildWeightGain',
    'heavyWeightLoss',
    'heavyWeightGain',
  ];
  goal = this.goals[0];

  bmi = 0;
  bmr = 0;
  bfp = 0;
  ibw = 0;
  calorie: any;
  tdee = 0;

  macro: any;
  macroKeys!: string[];
  index = 0;

  constructor(public fitnessService: FitnessService) {}

  ngOnInit(): void {}

  sentenceCase(text: any) {
    const result = text.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  basalMetablicRate() {
    this.bmr = this.fitnessService.metabolicRate(
      this.gender,
      this.age,
      this.height,
      this.weight
    );
  }

  bodyMassIndex() {
    this.bmi = this.fitnessService.bodyMassIndex(this.height, this.weight);
  }

  bodyFat() {
    this.bfp = this.fitnessService.bodyFat(
      this.gender,
      this.height,
      this.weight,
      this.neck,
      this.waist,
      this.hip
    );
  }

  bodyWeight() {
    this.ibw = this.fitnessService.idealBodyWeight(this.gender, this.height);
  }

  dailyEnergy() {
    this.tdee = this.fitnessService.dailyEnergyExpenditure(
      this.gender,
      this.age,
      this.height,
      this.weight,
      this.activity
    );
  }

  calories() {
    this.calorie = this.fitnessService.calorieNeeds(
      this.gender,
      this.age,
      this.height,
      this.weight,
      this.activity
    );
  }

  macros() {
    this.macro = this.fitnessService.macros(
      this.gender,
      this.age,
      this.height,
      this.weight,
      this.activity,
      this.goal
    );
    this.macroKeys = Object.keys(this.macro);
  }

  indexUp() {
    this.index < this.macroKeys.length - 1 ? this.index++ : (this.index = 0);
  }

  indexDown() {
    this.index > 0 ? this.index-- : (this.index = this.macroKeys.length - 1);
  }
}
