import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { baseUrls } from 'src/app/helpers/constants';
import {
  Meal,
  MealCategory,
  MealDetails,
  MealPopularIngredient,
} from 'src/app/helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CookbookService {
  constructor(private http: HttpClient) {}

  searchMeal(name: string) {
    return this.http.get(`${baseUrls.mealDb}search.php?s=${name}`).pipe(
      map((res: any): Meal[] => {
        return res.meals;
      })
    );
  }

  mealDictionary(character: string) {
    return this.http.get(`${baseUrls.mealDb}search.php?f=${character}`).pipe(
      map((res: any): Meal[] => {
        return res.meals;
      })
    );
  }

  mealById(id: string) {
    return this.http.get(`${baseUrls.mealDb}lookup.php?i=${id}`).pipe(
      map((res: any): MealDetails => {
        const meal = res.meals[0];
        const ingredients: any[] = [];
        for (let i = 1; i <= 20; i++) {
          if (`strIngredient${i}` in meal && meal[`strIngredient${i}`]) {
            ingredients.push({
              ingredient: meal[`strIngredient${i}`],
              measure: meal[`strMeasure${i}`],
            });
          }
          delete meal[`strIngredient${i}`];
          delete meal[`strMeasure${i}`];
        }
        meal.ingredients = ingredients;
        return meal;
      })
    );
  }

  randomMeal() {
    return this.http.get(`${baseUrls.mealDb}random.php`).pipe(
      map((res: any): MealDetails => {
        const meal = res.meals[0];
        const ingredients: any[] = [];
        for (let i = 1; i <= 20; i++) {
          if (`strIngredient${i}` in meal && meal[`strIngredient${i}`]) {
            ingredients.push({
              ingredient: meal[`strIngredient${i}`],
              measure: meal[`strMeasure${i}`],
            });
          }
          delete meal[`strIngredient${i}`];
          delete meal[`strMeasure${i}`];
        }
        meal.ingredients = ingredients;
        return meal;
      })
    );
  }

  categories() {
    return this.http.get(`${baseUrls.mealDb}categories.php`).pipe(
      map((res: any): MealCategory[] => {
        return res.categories;
      })
    );
  }

  private listAreas() {
    return this.http.get(`${baseUrls.mealDb}list.php?a=list`).pipe(
      map((res: any): string[] => {
        return res.meals.map((cat: any) => {
          return cat.strArea;
        });
      })
    );
  }

  private listIngredients() {
    return this.http.get(`${baseUrls.mealDb}list.php?i=list`).pipe(
      map((res: any): string[] => {
        return res.meals.map((cat: any) => {
          return cat.strIngredient;
        });
      })
    );
  }

  menu() {
    return forkJoin({
      categories: this.categories(),
      areas: this.listAreas(),
      ingredients: this.listIngredients(),
    });
  }

  popularIngredients() {
    return this.http.get(`${baseUrls.mealDb}list.php?i=list`).pipe(
      map((res: any): MealPopularIngredient[] => {
        return res.meals.filter((ingredient: any) => {
          return ingredient.strDescription;
        });
      })
    );
  }

  filterByCategory(category: string) {
    return this.http.get(`${baseUrls.mealDb}filter.php?c=${category}`).pipe(
      map((res: any): Meal[] => {
        return res.meals;
      })
    );
  }

  filterByArea(area: string) {
    return this.http.get(`${baseUrls.mealDb}filter.php?a=${area}`).pipe(
      map((res: any): Meal[] => {
        return res.meals;
      })
    );
  }

  filterByIngredient(ingredient: string) {
    return this.http.get(`${baseUrls.mealDb}filter.php?i=${ingredient}`).pipe(
      map((res: any): Meal[] => {
        return res.meals;
      })
    );
  }
}
