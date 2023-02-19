import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Utils } from 'src/app/helpers/utilties';
import { Location } from '@angular/common';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
})
export class AnimeComponent implements OnInit {
  isMobile = Utils.isMobile();
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  home() {
    this.location.back();
  }
}
