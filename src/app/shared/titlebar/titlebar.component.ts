import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss'],
})
export class TitlebarComponent implements OnInit {
  @Input() title!: string;
  @Input() homepage: boolean = false;
  constructor(private location: Location) {}

  ngOnInit(): void {}

  home() {
    this.location.back();
  }
}
