import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { baseUrls } from 'src/app/helpers/constants';
import { Drink, DrinkDetails } from 'src/app/helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(private http: HttpClient) {}

  searchDrink(name: string) {
    return this.http.get(`${baseUrls.cocktailDb}search.php?s=${name}`).pipe(
      map((res: any): Drink[] => {
        return res.drinks;
      })
    );
  }

  drinkById(id: string) {
    return this.http.get(`${baseUrls.cocktailDb}lookup.php?i=${id}`).pipe(
      map((res: any): DrinkDetails => {
        const drink = res.drinks[0];
        const ingredients: any[] = [];
        for (let i = 1; i <= 20; i++) {
          if (`strIngredient${i}` in drink && drink[`strIngredient${i}`]) {
            ingredients.push({
              ingredient: drink[`strIngredient${i}`],
              measure: drink[`strMeasure${i}`],
            });
          }
          delete drink[`strIngredient${i}`];
          delete drink[`strMeasure${i}`];
        }
        drink.ingredients = ingredients;
        return drink;
      })
    );
  }

  randomDrink() {
    return this.http.get(`${baseUrls.cocktailDb}random.php`).pipe(
      map((res: any): DrinkDetails => {
        const drink = res.drinks[0];
        const ingredients: any[] = [];
        for (let i = 1; i <= 20; i++) {
          if (`strIngredient${i}` in drink && drink[`strIngredient${i}`]) {
            ingredients.push({
              ingredient: drink[`strIngredient${i}`],
              measure: drink[`strMeasure${i}`],
            });
          }
          delete drink[`strIngredient${i}`];
          delete drink[`strMeasure${i}`];
        }
        drink.ingredients = ingredients;
        return drink;
      })
    );
  }

  private alcoholics() {
    return this.http.get(`${baseUrls.cocktailDb}list.php?a=list`).pipe(
      map((res: any): string[] => {
        return res.drinks.map((drink: any) => {
          return drink.strAlcoholic;
        });
      })
    );
  }

  private ingredients() {
    return this.http.get(`${baseUrls.cocktailDb}list.php?i=list`).pipe(
      map((res: any): string[] => {
        return res.drinks.map((drink: any) => {
          return drink.strIngredient1;
        });
      })
    );
  }

  private glasses() {
    return this.http.get(`${baseUrls.cocktailDb}list.php?g=list`).pipe(
      map((res: any): string[] => {
        return res.drinks.map((drink: any) => {
          return drink.strGlass;
        });
      })
    );
  }

  private categories() {
    return this.http.get(`${baseUrls.cocktailDb}list.php?c=list`).pipe(
      map((res: any): string[] => {
        return res.drinks.map((drink: any) => {
          return drink.strCategory;
        });
      })
    );
  }

  menu() {
    return forkJoin({
      categories: this.categories(),
      alcoholics: this.alcoholics(),
      ingredients: this.ingredients(),
      glasses: this.glasses(),
    });
  }

  filterByCategory(category: string) {
    return this.http.get(`${baseUrls.cocktailDb}filter.php?c=${category}`).pipe(
      map((res: any): Drink[] => {
        return res.drinks;
      })
    );
  }

  filterByTpe(type: string) {
    return this.http.get(`${baseUrls.cocktailDb}filter.php?a=${type}`).pipe(
      map((res: any): Drink[] => {
        return res.drinks;
      })
    );
  }

  filterByIngredient(ingredient: string) {
    return this.http
      .get(`${baseUrls.cocktailDb}filter.php?i=${ingredient}`)
      .pipe(
        map((res: any): Drink[] => {
          return res.drinks;
        })
      );
  }

  filterByGlass(glass: string) {
    return this.http.get(`${baseUrls.cocktailDb}filter.php?g=${glass}`).pipe(
      map((res: any): Drink[] => {
        return res.drinks;
      })
    );
  }
}
