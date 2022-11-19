import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/helpers/interfaces';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';

@Component({
  selector: 'app-meal-results',
  templateUrl: './meal-results.component.html',
  styleUrls: ['./meal-results.component.scss'],
})
export class MealResultsComponent implements OnInit {
  key: string;
  value!: string;
  showLoader!: boolean;
  results!: Meal[];
  constructor(
    private cookbookService: CookbookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.key = this.route.snapshot.paramMap.keys[0];
    const value = this.route.snapshot.paramMap.get(this.key);
    value ? (this.value = value) : this.router.navigate(['/cookbook']);
  }

  ngOnInit(): void {
    this.showLoader = true;
    switch (this.key) {
      case 'dish':
        this.cookbookService.searchMeal(this.value).subscribe((res) => {
          this.results = res;
          this.showLoader = false;
        });
        break;
      case 'category':
        this.cookbookService.filterByCategory(this.value).subscribe((res) => {
          this.results = res;
          this.showLoader = false;
        });
        break;
      case 'area':
        this.cookbookService.filterByArea(this.value).subscribe((res) => {
          this.results = res;
          this.showLoader = false;
        });
        break;
      case 'ingredient':
        this.cookbookService.filterByIngredient(this.value).subscribe((res) => {
          this.results = res;
          this.showLoader = false;
          console.log(this.results);
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
