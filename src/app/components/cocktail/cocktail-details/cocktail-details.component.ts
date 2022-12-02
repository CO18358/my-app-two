import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkDetails } from 'src/app/helpers/interfaces';
import { CocktailService } from 'src/app/services/cocktail/cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  showLoader!: boolean;
  drink!: DrinkDetails;
  constructor(
    private cocktailService: CocktailService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('drinkId');
    id ? this.getDrink(id) : this.getRandomDrink();
  }

  ngOnInit(): void {}

  imagePath(ingredient: string) {
    return `https://www.thecocktaildb.com/images/ingredients/${ingredient}.png`;
  }

  getDrink(id: string) {
    this.showLoader = true;
    this.cocktailService.drinkById(id).subscribe((res) => {
      this.drink = res;
      this.showLoader = false;
    });
  }

  getRandomDrink() {
    this.showLoader = true;
    this.cocktailService.randomDrink().subscribe((res) => {
      this.drink = res;
      this.showLoader = false;
    });
  }
}
