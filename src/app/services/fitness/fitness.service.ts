import { Injectable } from '@angular/core';
import * as fitnessCalc from 'fitness-calculator';
@Injectable({
  providedIn: 'root'
})
export class FitnessService {

  constructor() { }

  metabolicRate(gender: string, age: number, height: number, weight: number) {
    return fitnessCalc.BMR(gender, age, height, weight)
  }

  bodyMassIndex(height: number, weight: number) {
    return fitnessCalc.BMI(height, weight)
  }

  bodyFat(gender: string, height: number, weight: number, neck: number, waist: number, hip?: number) {
    return fitnessCalc.BFP(gender, height, weight, neck, waist, hip)
  }

  idealBodyWeight(gender: string, height: number) {
    return fitnessCalc.idealBodyWeight(gender, height)
  }

  calorieNeeds(gender: string, age: number, height: number, weight: number, activity: string) {
    return fitnessCalc.calorieNeeds(gender, age, height, weight, activity)
  }

  dailyEnergyExpenditure(gender: string, age: number, height: number, weight: number, activity: string) {
    return fitnessCalc.TDEE(gender, age, height, weight, activity)
  }

  macros(gender: string, age: number, height: number, weight: number, activity: string, goal: string) {
    return fitnessCalc.macros(gender, age, height, weight, activity, goal)
  }
}
