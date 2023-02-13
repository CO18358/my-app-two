import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MangaCount } from 'src/app/helpers/jikan.interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { MangaService } from 'src/app/services/manga/manga.service';

@Component({
  selector: 'app-manga-lists',
  templateUrl: './manga-lists.component.html',
  styleUrls: ['./manga-lists.component.scss'],
})
export class MangaListsComponent implements OnInit, OnDestroy {
  loader!: boolean;
  title!: string;
  results!: MangaCount[];

  showPagination = false;
  current!: number;
  last!: number;
  pageNumbers?: number[];

  currentRoute!: string;
  private destroy$ = new Subject();

  constructor(private router: Router, private manga: MangaService) {}

  ngOnInit() {
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
    const route = this.currentRoute.split('/').pop();
    if (route == 'genre') {
      this.loader = true;
      this.manga.genres().subscribe({
        next: (res) => {
          this.results = res;
          this.title = `Genres (${this.results.length})`;
          this.loader = false;
        },
      });
    } else if (route == 'magazine') {
      this.getMagazines();
    }
  }

  getMagazines(page?: number) {
    this.loader = true;
    this.manga.magazines(page).subscribe({
      next: (res) => {
        this.results = res.data;
        this.title = `Magazines (${res.pagination.items.total})`;

        this.showPagination = true;

        this.current = res.pagination.current_page;
        this.last = res.pagination.last_visible_page;
        this.pageNumbers = Utils.paginationNumbers(this.last, this.current);

        this.loader = false;
      },
    });
  }

  ngOnDestroy() {
    this.destroy$.next(0);
    this.destroy$.complete();
  }
}
