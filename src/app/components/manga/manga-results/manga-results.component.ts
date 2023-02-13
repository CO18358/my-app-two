import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MangaInfo, PaginatedResponse } from 'src/app/helpers/jikan.interfaces';
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
  results!: MangaInfo[];

  showPagination = false;
  current!: number;
  last!: number;
  pageNumbers?: number[];

  currentRoute!: string;

  private destroy$ = new Subject();
  constructor(private router: Router, private manga: MangaService) {}

  private setValues(data: MangaInfo[], current: number, last: number) {
    this.results = data;
    this.showPagination = true;
    this.current = current;
    this.last = last;
    this.pageNumbers = Utils.paginationNumbers(this.last, this.current);
    this.loader = false;
  }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.initialize();
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd && this.currentRoute !== event.url) {
        this.currentRoute = event.url;
        this.initialize();
      }
    });
  }

  initialize() {
    this.getTopManga();
  }

  getTopManga(params?: any) {
    this.loader = true;
    this.manga.topManga(params).subscribe({
      next: (res) => {
        this.setValues(
          res.data,
          res.pagination.current_page,
          res.pagination.last_visible_page
        );
        this.title = `Top Manga (${res.pagination.items.total})`;
        console.log(res);
      },
    });
  }

  ngOnDestroy() {
    this.destroy$.next(0);
    this.destroy$.complete();
  }
}
