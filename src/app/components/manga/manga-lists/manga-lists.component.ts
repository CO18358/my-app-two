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
        this.showPagination = !(
          !res.pagination.has_next_page && res.pagination.current_page == 1
        );
        if (this.showPagination) {
          this.current = res.pagination.current_page;
          this.last = res.pagination.last_visible_page;
          this.pageNumbers = Utils.paginationNumbers(this.last, this.current);
        }
        this.loader = false;
      },
    });
  }

  viewManga(id: number) {
    let params;
    if (this.currentRoute.includes('genre')) {
      params = { genres: id };
    } else if (this.currentRoute.includes('magazine')) {
      params = { magazines: id };
    }
    this.router.navigate(['/manga/results'], { queryParams: params });
  }

  ngOnDestroy() {
    this.destroy$.next(0);
    this.destroy$.complete();
  }
}
