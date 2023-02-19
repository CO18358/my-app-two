import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import {
  MangaInfo,
  ResultCard,
  PaginatedResponse,
} from 'src/app/helpers/jikan.interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { MangaService } from 'src/app/services/manga/manga.service';

@Component({
  selector: 'app-manga-results',
  templateUrl: './manga-results.component.html',
  styleUrls: ['./manga-results.component.scss'],
})
export class MangaResultsComponent implements OnInit {
  loader!: boolean;
  title!: string;
  results!: ResultCard[];

  showPagination = false;
  current!: number;
  last!: number;
  pageNumbers?: number[];

  params!: any;

  constructor(
    private manga: MangaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.params = Object.fromEntries(Object.entries(queryParams));
      this.getMangas(queryParams);
    });
  }

  ngOnInit(): void {}

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

  mangaPage(page: number) {
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
