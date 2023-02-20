import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {
  ResultCard,
  PaginatedResponse,
} from 'src/app/helpers/jikan.interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { AnimeService } from 'src/app/services/anime/anime.service';

@Component({
  selector: 'app-anime-results',
  templateUrl: './anime-results.component.html',
  styleUrls: ['./anime-results.component.scss'],
})
export class AnimeResultsComponent implements OnInit {
  loader!: boolean;
  title!: string;
  results!: ResultCard[];

  showPagination = false;
  current!: number;
  last!: number;
  pageNumbers?: number[];

  params!: any;

  constructor(
    private anime: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.params = Object.fromEntries(Object.entries(queryParams));
      this.getAnimes(queryParams);
    });
  }

  ngOnInit(): void {}

  getAnimes(params?: any) {
    this.loader = true;
    this.anime.getAnimes(params).subscribe({
      next: (res) => {
        this.setValues(res);
        this.title = `Results (${res.pagination.items.total})`;
        console.log(res, this.current, this.last);
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

  animePage(page: number) {
    this.params.page = page;
    this.navigate();
  }

  navigate() {
    const queryParams = Utils.removeEmptyValues(this.params);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }
}
