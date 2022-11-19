import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { MealCategory } from 'src/app/helpers/interfaces';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';

@Component({
  selector: 'app-meal-menu',
  templateUrl: './meal-menu.component.html',
  styleUrls: ['./meal-menu.component.scss'],
})
export class MealMenuComponent implements OnInit {
  showLoader: boolean = false;
  categories!: MealCategory[];
  areas!: string[];
  ingredients!: string[];

  constructor(
    private cookbookService: CookbookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cookbookService.menu().subscribe((res) => {
      this.categories = res.categories;
      this.areas = res.areas;
      this.ingredients = res.ingredients;
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
