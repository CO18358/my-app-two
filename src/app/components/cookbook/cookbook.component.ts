import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss'],
})
export class CookbookComponent implements OnInit {
  query!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  home() {
    this.router.navigate(['/about']);
  }
  search() {
    this.router.navigate(['/cookbook/search', this.query]);
  }

  random() {
    this.router.navigate(['/cookbook/random']);
  }

  ingredients() {
    this.router.navigate(['/cookbook/ingredients']);
  }

  menu() {
    this.router.navigate(['/cookbook/menu']);
  }

  dictionary() {
    this.router.navigate(['/cookbook/dictionary']);
  }
}
