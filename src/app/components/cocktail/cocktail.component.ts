import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Utils } from 'src/app/helpers/utilties';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent implements OnInit {
  query!: string;
  isMobile = Utils.isMobile();
  @ViewChild('drawer') drawer!: MatDrawer;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  home() {
    this.router.navigate(['/about']);
  }
  search() {
    this.drawer.close();
    this.router.navigate(['/cocktail/search', this.query]);
  }

  random() {
    this.drawer.close();
    this.router.navigate(['/cocktail/random']);
  }
  menu() {
    this.drawer.close();
    this.router.navigate(['/cocktail/menu']);
  }
}
