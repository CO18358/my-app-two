import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Utils } from 'src/app/helpers/utilties';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss'],
})
export class CookbookComponent implements OnInit {
  query!: string;
  isMobile = Utils.isMobile();
  @ViewChild('drawer') drawer!: MatDrawer;
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  home() {
    this.location.back();
  }
  search() {
    this.drawer.close();
    this.router.navigate(['/cookbook/search', this.query]);
  }

  random() {
    this.drawer.close();
    this.router.navigate(['/cookbook/random']);
  }

  ingredients() {
    this.drawer.close();
    this.router.navigate(['/cookbook/ingredients']);
  }

  menu() {
    this.drawer.close();
    this.router.navigate(['/cookbook/menu']);
  }

  dictionary() {
    this.drawer.close();
    this.router.navigate(['/cookbook/dictionary']);
  }
}
