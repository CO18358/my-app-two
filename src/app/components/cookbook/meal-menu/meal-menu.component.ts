import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { MealCategory } from 'src/app/helpers/interfaces';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';

@Component({
  selector: 'app-meal-menu',
  templateUrl: './meal-menu.component.html',
  styleUrls: ['./meal-menu.component.scss'],
})
export class MealMenuComponent implements OnInit, OnDestroy {
  showLoader: boolean = false;
  categories!: MealCategory[];
  areas!: string[];
  ingredients!: string[];
  menu$!: Subscription;
  constructor(
    private cookbookService: CookbookService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.menu$.unsubscribe();
  }

  ngOnInit(): void {
    this.showLoader = true;
    this.menu$ = this.cookbookService.menu().subscribe((res) => {
      this.categories = res.categories;
      this.areas = res.areas;
      this.ingredients = res.ingredients;
      this.showLoader = false;
    });
  }

  imagePath(ingredient: string) {
    return `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
  }

  lookupCategory(category: string) {
    this.router.navigate(['/cookbook/category', category]);
  }

  lookupArea(area: string) {
    this.router.navigate(['/cookbook/area', area]);
  }

  lookupIngredient(ingredient: string) {
    this.router.navigate(['/cookbook/ingredient', ingredient]);
  }
}
