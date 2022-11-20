import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drink } from 'src/app/helpers/interfaces';
import { CocktailService } from 'src/app/services/cocktail/cocktail.service';

@Component({
  selector: 'app-cocktail-results',
  templateUrl: './cocktail-results.component.html',
  styleUrls: ['./cocktail-results.component.scss'],
})
export class CocktailResultsComponent implements OnInit {
  key: string;
  value!: string;
  showLoader!: boolean;
  results!: Drink[];
  constructor(
    private cocktailService: CocktailService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.key = this.route.snapshot.paramMap.keys[0];
    const value = this.route.snapshot.paramMap.get(this.key);
    value ? (this.value = value) : this.router.navigate(['/cocktail']);
  }

  ngOnInit(): void {
    this.showLoader = true;
    switch (this.key) {
      case 'drink':
        this.cocktailService.searchDrink(this.value).subscribe((res) => {
          this.results = res;
          this.showLoader = false;
        });
        break;
      case 'category':
        this.cocktailService.filterByCategory(this.value).subscribe((res) => {
          this.results = res;
          this.showLoader = false;
        });
        break;
      case 'alcoholic':
        this.cocktailService.filterByAlcoholic(this.value).subscribe((res) => {
          this.results = res;
          this.showLoader = false;
        });
        break;
      case 'ingredient':
        this.cocktailService.filterByIngredient(this.value).subscribe((res) => {
          this.results = res;
          this.showLoader = false;
        });
        break;
      case 'glass':
        this.cocktailService.filterByGlass(this.value).subscribe((res) => {
          this.results = res;
          this.showLoader = false;
        });
        break;
      default:
        this.router.navigate(['/cookbook']);
    }
  }

  gotoDrink(id: string) {
    this.router.navigate(['/cocktail/drink', id]);
  }
}
