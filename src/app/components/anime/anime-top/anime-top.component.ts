import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Anime } from 'src/app/helpers/jikan';
import {
  ResultCard,
  PaginatedResponse,
} from 'src/app/helpers/jikan.interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { AnimeService } from 'src/app/services/anime/anime.service';

@Component({
  selector: 'app-anime-top',
  templateUrl: './anime-top.component.html',
  styleUrls: ['./anime-top.component.scss'],
})
export class AnimeTopComponent implements OnInit, OnDestroy {
  loader!: boolean;
  title!: string;
  results!: ResultCard[];

  showPagination = false;
  last!: number;
  pageNumbers?: number[];

  filters = Anime.Filter;
  types = Anime.Type;
  queryParams!: any;

  anime$!: Subscription;
  constructor(
    private anime: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.queryParams = Object.fromEntries(Object.entries(queryParams));
      this.getTopManga(queryParams);
    });
  }
  ngOnDestroy(): void {
    this.anime$.unsubscribe();
  }

  ngOnInit(): void {}

  getTopManga(params?: any) {
    this.loader = true;
    this.anime$ = this.anime.topAnime(params).subscribe({
      next: (res) => {
        console.log(res.data);

        this.setValues(res);
        this.title = `Top (${res.pagination.items.total})`;
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
      this.queryParams.page = res.pagination.current_page;
      this.last = res.pagination.last_visible_page;
      this.pageNumbers = Utils.paginationNumbers(
        this.last,
        this.queryParams.page
      );
    }
    this.loader = false;
  }

  animePage(page: number) {
    this.queryParams.page = page;
    this.navigate();
  }

  navigate() {
    const queryParams = Utils.removeEmptyValues(this.queryParams);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }
}
