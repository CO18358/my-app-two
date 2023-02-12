import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import {
  MangaGenre,
  PaginatedResponse,
} from 'src/app/helpers/jikan.interfaces';
import { MangaService } from 'src/app/services/manga/manga.service';

@Component({
  selector: 'app-manga-lists',
  templateUrl: './manga-lists.component.html',
  styleUrls: ['./manga-lists.component.scss'],
})
export class MangaListsComponent implements OnInit, OnDestroy {
  loader!: boolean;
  title!: string;
  results!: MangaGenre[];
  paginated?: PaginatedResponse;

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
      this.loader = true;
      this.manga.magazines().subscribe({
        next: (res) => {
          this.results = res.data;
          this.paginated = res.pagination;
          this.title = `Magazines (${this.paginated.items.total})`;
          this.loader = false;
        },
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(0);
    this.destroy$.complete();
  }
}
