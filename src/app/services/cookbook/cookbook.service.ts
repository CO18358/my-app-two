import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CookbookService {
  searchUrl = 'https://forkify-api.herokuapp.com/api/search';
  recipeUrl = 'https://forkify-api.herokuapp.com/api/get';
  constructor(private http: HttpClient) {}

  searchRecipes(query: string) {
    return this.http.get(`${this.searchUrl}?q=${query}`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getRecipe(id: string) {
    return this.http.get(`${this.recipeUrl}?rId=${id}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
