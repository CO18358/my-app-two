import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MealDetails } from 'src/app/helpers/interfaces';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss'],
})
export class MealDetailsComponent implements OnInit {
  showLoader!: boolean;
  meal!: MealDetails;
  constructor(
    private cookbookService: CookbookService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    const id = this.route.snapshot.paramMap.get('mealId');
    id ? this.getMeal(id) : this.getRandomMeal();
  }

  ngOnInit(): void {}

  imagePath(ingredient: string) {
    return `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
  }

  getYoutubeURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      url.replace('watch?v=', 'embed/')
    );
  }

  getMeal(id: string) {
    this.showLoader = true;
    this.cookbookService.mealById(id).subscribe((res) => {
      this.meal = res;
      this.showLoader = false;
      console.log(this.meal);
    });
  }

  getRandomMeal() {
    this.showLoader = true;
    this.cookbookService.randomMeal().subscribe((res) => {
      this.meal = res;
      this.showLoader = false;
      console.log(this.meal);
    });
  }
}
