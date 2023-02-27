import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manga, Sort } from 'src/app/helpers/jikan';
import { Utils } from 'src/app/helpers/utilties';

interface SearchParams {
  q?: string;
  type?: string;
  score?: number;
  status?: string;
  order_by?: string;
  sort?: string;
  start_date?: string;
  end_date?: string;
  genres?: string;
}

@Component({
  selector: 'app-manga-search',
  templateUrl: './manga-search.component.html',
  styleUrls: ['./manga-search.component.scss'],
})
export class MangaSearchComponent implements OnInit {
  loader!: boolean;
  types = Manga.Type;
  statuses = Manga.Status;
  scores = [6, 7, 8, 9, 10];
  orders = Manga.OrderBy;
  params: SearchParams = { q: '' };
  sorts = Sort;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigate() {
    const queryParams = Utils.removeEmptyValues(this.params);
    this.router.navigate(['/manga/results'], {
      queryParams,
    });
  }
}
