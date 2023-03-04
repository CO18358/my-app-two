import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import {
  PaginatedResponse,
  ResultCard,
  Season,
} from 'src/app/helpers/jikan.interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { AnimeService } from 'src/app/services/anime/anime.service';

@Component({
  selector: 'app-anime-seasons',
  templateUrl: './anime-seasons.component.html',
  styleUrls: ['./anime-seasons.component.scss'],
})
export class AnimeSeasonsComponent implements OnInit {
  loader!: boolean;
  title!: string;
  results!: ResultCard[];

  showPagination = false;
  current!: number;
  last!: number;
  pageNumbers?: number[];

  year!: string;
  season!: string;
  seasonNames = ['winter', 'spring', 'summer', 'fall'];

  seasons!: Season[];

  constructor(private anime: AnimeService, private router: Router) {
    const date = new Date();
    this.year = date.getFullYear().toString();
    this.season = this.seasonNames[Math.floor(date.getMonth() / 3) % 4];
  }

  async ngOnInit() {
    this.loader = true;
    this.seasons = await lastValueFrom(this.anime.seasonList());
    this.getSeasonAnime();
  }

  getSeasonAnime(page?: number) {
    this.loader = true;
    this.anime.seasonAnime(this.year, this.season, page).subscribe({
      next: (res) => {
        this.setValues(res);
        this.title = `${this.season} ${this.year} (${res.pagination.items.total})`;
        console.log(res, this.current, this.last);
        this.loader = false;
      },
    });
  }

  private setValues(res: {
    pagination: PaginatedResponse;
    data: ResultCard[];
  }) {
    this.results = res.data;
    this.showPagination = !(
      !res.pagination.has_next_page && res.pagination.current_page == 1
    );
    if (this.showPagination) {
      this.current = res.pagination.current_page;
      this.last = res.pagination.last_visible_page;
      this.pageNumbers = Utils.paginationNumbers(this.last, this.current);
    }
    this.loader = false;
  }
}
