import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fitnessCalc from 'fitness-calculator';
@Injectable({
  providedIn: 'root',
})
export class FitnessService {
  constructor(private http: HttpClient) {}

  metabolicRate(gender: string, age: number, height: number, weight: number) {
    if (gender == 'male') {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  }

  leanBodyMass(gender: string, age: number, height: number, weight: number) {
    if (gender == 'male') {
      return (
        1.1 * weight - 128 * (weight / height / height - 24.9 * (age - 20))
      );
    } else {
      return (
        1.07 * weight - 148 * (weight / height / height - 24.9 * (age - 20))
      );
    }
  }

  bodyMassIndex(height: number, weight: number) {
    return weight / (height / 100) ** 2;
  }

  bodyFat(
    gender: string,
    height: number,
    weight: number,
    neck: number,
    waist: number,
    hip?: number
  ) {
    return fitnessCalc.BFP(gender, height, weight, neck, waist, hip);
  }

  idealBodyWeight(gender: string, height: number) {
    if (gender === 'male') {
      return 50 + 2.3 * (height - 60);
    } else {
      return 45.5 + 2.3 * (height - 60);
    }
  }

  calorieNeeds(
    gender: string,
    age: number,
    height: number,
    weight: number,
    activity: string
  ) {
    return fitnessCalc.calorieNeeds(gender, age, height, weight, activity);
  }

  dailyEnergyExpenditure(
    gender: string,
    age: number,
    height: number,
    weight: number,
    activity: string
  ) {
    return fitnessCalc.TDEE(gender, age, height, weight, activity);
  }

  macros(
    gender: string,
    age: number,
    height: number,
    weight: number,
    activity: string,
    goal: string
  ) {
    return fitnessCalc.macros(gender, age, height, weight, activity, goal);
  }
}
