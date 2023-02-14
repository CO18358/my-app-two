import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import {
  MangaInfo,
  MangaShort,
  PaginatedResponse,
} from 'src/app/helpers/jikan.interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { MangaService } from 'src/app/services/manga/manga.service';

@Component({
  selector: 'app-manga-results',
  templateUrl: './manga-results.component.html',
  styleUrls: ['./manga-results.component.scss'],
})
export class MangaResultsComponent implements OnInit, OnDestroy {
  loader!: boolean;
  title!: string;
  results!: MangaShort[];

  showPagination = false;
  current!: number;
  last!: number;
  pageNumbers?: number[];

  currentRoute!: string;

  private destroy$ = new Subject();
  constructor(private router: Router, private manga: MangaService) {}

  private setValues(res: {
    pagination: PaginatedResponse;
    data: MangaShort[];
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

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.getData();
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd && this.currentRoute !== event.url) {
        this.currentRoute = event.url;
        this.getData();
      }
    });
  }

  getData(obj?: any) {
    if (this.currentRoute.includes('top')) {
      this.getTopManga(obj);
    } else if (this.currentRoute.includes('results')) {
      const sampleURL = 'https://example.com';
      const url = new URL(`${sampleURL}${this.currentRoute}`);
      const queryParams: any = {};
      url.searchParams.forEach((value, key) => {
        queryParams[key] = value;
      });
      this.getMangas(Object.assign({}, queryParams, obj));
    }
  }

  getTopManga(params?: any) {
    this.loader = true;
    this.manga.topManga(params).subscribe({
      next: (res) => {
        this.setValues(res);
        this.title = `Top (${res.pagination.items.total})`;
      },
    });
  }

  getMangas(params?: any) {
    this.loader = true;
    this.manga.getMangas(params).subscribe({
      next: (res) => {
        this.setValues(res);
        this.title = `Results (${res.pagination.items.total})`;
        console.log(res, this.current, this.last);
      },
    });
  }

  ngOnDestroy() {
    this.destroy$.next(0);
    this.destroy$.complete();
  }
}
