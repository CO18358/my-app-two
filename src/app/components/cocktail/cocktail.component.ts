import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent implements OnInit {
  query!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  home() {
    this.router.navigate(['/about']);
  }
  search() {
    this.router.navigate(['/cocktail/search', this.query]);
  }

  random() {
    this.router.navigate(['/cocktail/random']);
  }
  menu() {
    this.router.navigate(['/cocktail/menu']);
  }
}
