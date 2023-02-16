import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MealPopularIngredient } from 'src/app/helpers/interfaces';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';

@Component({
  selector: 'app-meal-ingredients',
  templateUrl: './meal-ingredients.component.html',
  styleUrls: ['./meal-ingredients.component.scss'],
})
export class MealIngredientsComponent implements OnInit, OnDestroy {
  showLoader!: boolean;
  ingredients!: MealPopularIngredient[];
  ingredients$!: Subscription;
  index: number = 0;

  constructor(
    private cookbookService: CookbookService,
    private router: Router
  ) {
    this.showLoader = true;
    this.ingredients$ = this.cookbookService
      .popularIngredients()
      .subscribe((res) => {
        this.ingredients = res;
        this.showLoader = false;
      });
  }
  ngOnDestroy(): void {
    this.ingredients$.unsubscribe();
  }

  ngOnInit(): void {}

  imagePath(ingredient: MealPopularIngredient) {
    return `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`;
  }

  prev() {
    this.index == 0 ? (this.index = this.ingredients.length - 1) : this.index--;
  }

  next() {
    this.index == this.ingredients.length - 1 ? (this.index = 0) : this.index++;
  }

  searchRecipes(ingredient: string) {
    this.router.navigate(['/cookbook/ingredient', ingredient]);
  }
}
