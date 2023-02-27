import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CocktailService } from 'src/app/services/cocktail/cocktail.service';

@Component({
  selector: 'app-cocktail-menu',
  templateUrl: './cocktail-menu.component.html',
  styleUrls: ['./cocktail-menu.component.scss'],
})
export class CocktailMenuComponent implements OnInit, OnDestroy {
  showLoader: boolean = false;
  categories!: string[];
  types!: string[];
  glasses!: string[];
  ingredients!: string[];
  menu$!: Subscription;
  constructor(
    private cocktailService: CocktailService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.menu$.unsubscribe();
  }

  ngOnInit(): void {
    this.showLoader = true;
    this.menu$ = this.cocktailService.menu().subscribe((res) => {
      this.categories = res.categories;
      this.types = res.alcoholics;
      this.ingredients = res.ingredients;
      this.glasses = res.glasses;
      this.showLoader = false;
    });
  }

  imagePath(ingredient: string) {
    return `https://www.thecocktaildb.com/images/ingredients/${ingredient}.png`;
  }

  lookupCategory(category: string) {
    this.router.navigate(['/cocktail/category', category]);
  }

  lookupType(type: string) {
    this.router.navigate(['/cocktail/type', type]);
  }

  lookupIngredient(ingredient: string) {
    this.router.navigate(['/cocktail/ingredient', ingredient]);
  }

  lookupGlass(glass: string) {
    this.router.navigate(['/cocktail/glass', glass]);
  }
}
