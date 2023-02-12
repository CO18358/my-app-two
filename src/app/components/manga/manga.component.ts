import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Utils } from 'src/app/helpers/utilties';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss'],
})
export class MangaComponent implements OnInit {
  isMobile = Utils.isMobile();
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  home() {
    this.location.back();
  }
}
