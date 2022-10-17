import { Component, OnInit } from '@angular/core';
import { INGREDIENTS } from 'src/app/models/cookbook';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss'],
})
export class CookbookComponent implements OnInit {
  viewModes = {
    category: 'categories',
    dishes: 'dishes',
    recipe: 'recipe',
  };
  view = this.viewModes.category;

  ingredients = INGREDIENTS.sort();
  dishes: any;

  constructor(private cookbookService: CookbookService) {}

  ngOnInit(): void {}

  getDishes(ingredient: string) {
    this.cookbookService.searchRecipes(ingredient).subscribe((res) => {
      this.dishes = res;
      this.view = this.viewModes.dishes;
    });
  }
}
