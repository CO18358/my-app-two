import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime, Sort } from 'src/app/helpers/jikan';
import { Utils } from 'src/app/helpers/utilties';

interface SearchParams {
  q?: string;
  type?: string;
  score?: number;
  status?: string;
  rating?: string;
  order_by?: string;
  sort?: string;
}

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss'],
})
export class AnimeSearchComponent implements OnInit {
  loader!: boolean;
  types = Anime.Type;
  statuses = Anime.Status;
  scores = [6, 7, 8, 9, 10];
  orders = Anime.OrderBy;
  ratings = Anime.Rating;
  params: SearchParams = { q: '' };
  sorts = Sort;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigate() {
    const queryParams = Utils.removeEmptyValues(this.params);
    this.router.navigate(['/anime/results'], {
      queryParams,
    });
  }
}
