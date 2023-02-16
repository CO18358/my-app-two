import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Meal } from 'src/app/helpers/interfaces';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';

@Component({
  selector: 'app-meal-results',
  templateUrl: './meal-results.component.html',
  styleUrls: ['./meal-results.component.scss'],
})
export class MealResultsComponent implements OnInit, OnDestroy {
  key!: string;
  value!: string;
  showLoader!: boolean;
  results!: Meal[];
  meals$!: Subscription;
  constructor(
    private cookbookService: CookbookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((res) => {
      const [[key, value]] = Object.entries(res);
      this.key = key;
      this.value = value;
    });
  }

  ngOnDestroy(): void {
    this.meals$.unsubscribe();
  }

  ngOnInit(): void {
    this.search();
  }
  search() {
    this.showLoader = true;
    switch (this.key) {
      case 'dish':
        this.meals$ = this.cookbookService
          .searchMeal(this.value)
          .subscribe((res) => {
            this.results = res;
            this.showLoader = false;
          });
        break;
      case 'category':
        this.meals$ = this.cookbookService
          .filterByCategory(this.value)
          .subscribe((res) => {
            this.results = res;
            this.showLoader = false;
          });
        break;
      case 'area':
        this.meals$ = this.cookbookService
          .filterByArea(this.value)
          .subscribe((res) => {
            this.results = res;
            this.showLoader = false;
          });
        break;
      case 'ingredient':
        this.meals$ = this.cookbookService
          .filterByIngredient(this.value)
          .subscribe((res) => {
            this.results = res;
            this.showLoader = false;
          });
        break;
      default:
        this.router.navigate(['/cookbook']);
    }
  }
  gotoMeal(id: string) {
    this.router.navigate(['/cookbook/meal', id]);
  }
}
