import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Manga } from 'src/app/helpers/jikan';
import {
  ResultCard,
  PaginatedResponse,
} from 'src/app/helpers/jikan.interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { MangaService } from 'src/app/services/manga/manga.service';

@Component({
  selector: 'app-manga-top',
  templateUrl: './manga-top.component.html',
  styleUrls: ['./manga-top.component.scss'],
})
export class MangaTopComponent implements OnInit, OnDestroy {
  loader!: boolean;
  title!: string;
  results!: ResultCard[];

  showPagination = false;
  last!: number;
  pageNumbers?: number[];

  filters = Manga.Filter;
  types = Manga.Type;
  queryParams!: any;

  manga$!: Subscription;
  constructor(
    private manga: MangaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.queryParams = Object.fromEntries(Object.entries(queryParams));
      this.getTopManga(queryParams);
    });
  }
  ngOnDestroy(): void {
    this.manga$.unsubscribe();
  }

  ngOnInit(): void {}

  getTopManga(params?: any) {
    this.loader = true;
    this.manga$ = this.manga.topManga(params).subscribe({
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

  mangaPage(page: number) {
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
