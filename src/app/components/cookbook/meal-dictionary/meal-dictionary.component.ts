import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Meal } from 'src/app/helpers/interfaces';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';

@Component({
  selector: 'app-meal-dictionary',
  templateUrl: './meal-dictionary.component.html',
  styleUrls: ['./meal-dictionary.component.scss'],
})
export class MealDictionaryComponent implements OnInit, OnDestroy {
  showLoader!: boolean;
  results!: Meal[];
  char: string = 'a';
  meals$!: Subscription;
  constructor(
    private cookbookService: CookbookService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.meals$.unsubscribe();
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.showLoader = true;
    this.meals$ = this.cookbookService
      .mealDictionary(this.char)
      .subscribe((res) => {
        this.results = res;
        this.showLoader = false;
      });
  }

  nextChar() {
    this.char == 'z'
      ? (this.char = 'a')
      : (this.char = String.fromCharCode(this.char.charCodeAt(0) + 1));
    this.getRecipes();
  }

  prevChar() {
    this.char == 'a'
      ? (this.char = 'z')
      : (this.char = String.fromCharCode(this.char.charCodeAt(0) - 1));
    this.getRecipes();
  }

  gotoMeal(id: string) {
    this.router.navigate(['/cookbook/meal', id]);
  }
}
