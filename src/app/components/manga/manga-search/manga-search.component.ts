import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-search',
  templateUrl: './manga-search.component.html',
  styleUrls: ['./manga-search.component.scss'],
})
export class MangaSearchComponent implements OnInit {
  loader!: boolean;
  constructor() {}

  ngOnInit(): void {}
}
