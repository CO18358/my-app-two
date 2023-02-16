import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Drink } from 'src/app/helpers/interfaces';
import { CocktailService } from 'src/app/services/cocktail/cocktail.service';

@Component({
  selector: 'app-cocktail-results',
  templateUrl: './cocktail-results.component.html',
  styleUrls: ['./cocktail-results.component.scss'],
})
export class CocktailResultsComponent implements OnInit, OnDestroy {
  key!: string;
  value!: string;
  showLoader!: boolean;
  results!: Drink[];
  drink$!: Subscription;
  constructor(
    private cocktailService: CocktailService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((res) => {
      const [[key, value]] = Object.entries(res);
      this.key = key;
      this.value = value;
      this.search();
    });
  }
  ngOnDestroy(): void {
    this.drink$.unsubscribe();
  }

  ngOnInit(): void {}

  search() {
    this.showLoader = true;
    switch (this.key) {
      case 'drink':
        this.drink$ = this.cocktailService
          .searchDrink(this.value)
          .subscribe((res) => {
            this.results = res;
            this.showLoader = false;
          });
        break;
      case 'category':
        this.drink$ = this.cocktailService
          .filterByCategory(this.value)
          .subscribe((res) => {
            this.results = res;
            this.showLoader = false;
          });
        break;
      case 'type':
        this.drink$ = this.cocktailService
          .filterByTpe(this.value)
          .subscribe((res) => {
            this.results = res;
            this.showLoader = false;
          });
        break;
      case 'ingredient':
        this.drink$ = this.cocktailService
          .filterByIngredient(this.value)
          .subscribe((res) => {
            this.results = res;
            this.showLoader = false;
          });
        break;
      case 'glass':
        this.drink$ = this.cocktailService
          .filterByGlass(this.value)
          .subscribe((res) => {
            this.results = res;
            this.showLoader = false;
          });
        break;
      default:
        this.router.navigate(['/cocktail']);
    }
  }

  gotoDrink(id: string) {
    this.router.navigate(['/cocktail/drink', id]);
  }
}
