import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MealDetails } from 'src/app/helpers/interfaces';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss'],
})
export class MealDetailsComponent implements OnInit, OnDestroy {
  showLoader!: boolean;
  meal!: MealDetails;
  meal$!: Subscription;
  constructor(
    private cookbookService: CookbookService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    const id = this.route.snapshot.paramMap.get('mealId');
    id ? this.getMeal(id) : this.getRandomMeal();
  }
  ngOnDestroy(): void {
    this.meal$.unsubscribe();
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
    this.meal$ = this.cookbookService.mealById(id).subscribe((res) => {
      this.meal = res;
      this.showLoader = false;
    });
  }

  getRandomMeal() {
    this.showLoader = true;
    this.meal$ = this.cookbookService.randomMeal().subscribe((res) => {
      this.meal = res;
      this.showLoader = false;
    });
  }
}
