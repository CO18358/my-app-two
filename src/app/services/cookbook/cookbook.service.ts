import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {
  Meal,
  MealCategory,
  MealPopularIngredient,
} from 'src/app/helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CookbookService {
  baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
  constructor(private http: HttpClient) {}

  searchMeal(name: string) {
    return this.http.get(`${this.baseUrl}search.php?s=${name}`).pipe(
      map((res: any): Meal[] => {
        return res.meals;
      })
    );
  }

  mealDictionary(character: string) {
    return this.http.get(`${this.baseUrl}search.php?f=${character}`).pipe(
      map((res: any): Meal[] => {
        return res.meals;
      })
    );
  }

  mealById(id: string) {
    return this.http.get(`${this.baseUrl}lookup.php?i=${id}`).pipe(
      map((res: any) => {
        return res.meals[0];
      })
    );
  }

  randomMeal() {
    return this.http.get(`${this.baseUrl}random.php`).pipe(
      map((res: any) => {
        return res.meals[0];
      })
    );
  }

  categories() {
    return this.http.get(`${this.baseUrl}categories.php`).pipe(
      map((res: any): MealCategory[] => {
        return res.categories;
      })
    );
  }

  listAreas() {
    return this.http.get(`${this.baseUrl}list.php?a=list`).pipe(
      map((res: any): string[] => {
        return res.meals.map((cat: any) => {
          return cat.strArea;
        });
      })
    );
  }

  listIngredients() {
    return this.http.get(`${this.baseUrl}list.php?i=list`).pipe(
      map((res: any): string[] => {
        return res.meals.map((cat: any) => {
          return cat.strIngredient;
        });
      })
    );
  }

  popularIngredients() {
    return this.http.get(`${this.baseUrl}list.php?i=list`).pipe(
      map((res: any): MealPopularIngredient[] => {
        return res.meals.filter((ingredient: any) => {
          return ingredient.strDescription;
        });
      })
    );
  }

  filterByCategory(category: string) {
    return this.http.get(`${this.baseUrl}filter.php?c=${category}`).pipe(
      map((res: any): Meal[] => {
        return res.meals;
      })
    );
  }

  filterByArea(area: string) {
    return this.http.get(`${this.baseUrl}filter.php?a=${area}`).pipe(
      map((res: any): Meal[] => {
        return res.meals;
      })
    );
  }

  filterByIngredient(ingredient: string) {
    return this.http.get(`${this.baseUrl}filter.php?i=${ingredient}`).pipe(
      map((res: any): Meal[] => {
        return res.meals;
      })
    );
  }
}
