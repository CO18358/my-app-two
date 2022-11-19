import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealCategory } from 'src/app/helpers/interfaces';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';

@Component({
  selector: 'app-meal-categories',
  templateUrl: './meal-categories.component.html',
  styleUrls: ['./meal-categories.component.scss'],
})
export class MealCategoriesComponent implements OnInit {
  showLoader: boolean = false;
  categories!: MealCategory[];
  index: number = 0;

  constructor(
    private cookbookService: CookbookService,
    private router: Router
  ) {
    this.showLoader = true;
    this.cookbookService.categories().subscribe((res) => {
      this.categories = res;
      this.showLoader = false;
    });
  }

  ngOnInit(): void {}

  prev() {
    this.index == 0 ? (this.index = this.categories.length - 1) : this.index--;
  }

  next() {
    this.index == this.categories.length - 1 ? (this.index = 0) : this.index++;
  }

  searchRecipes(category: string) {
    this.router.navigate(['/cookbook/category', category]);
  }
}
