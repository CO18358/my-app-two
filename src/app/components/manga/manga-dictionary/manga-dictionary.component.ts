import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  ResultCard,
  PaginatedResponse,
} from 'src/app/helpers/jikan.interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { MangaService } from 'src/app/services/manga/manga.service';

interface DictParams {
  letter: string;
  page?: number;
}

@Component({
  selector: 'app-manga-dictionary',
  templateUrl: './manga-dictionary.component.html',
  styleUrls: ['./manga-dictionary.component.scss'],
})
export class MangaDictionaryComponent implements OnInit, OnDestroy {
  loader!: boolean;
  title!: string;
  results!: ResultCard[];

  showPagination = false;
  last!: number;
  pageNumbers?: number[];
  page!: number;
  letter!: string;
  letters = Utils.alphabetArray;

  manga$!: Subscription;
  constructor(
    private manga: MangaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.letter = queryParams['letter'] || this.letters[0];
      this.page = queryParams['page'] || 1;
      this.getMangas();
    });
  }
  ngOnDestroy(): void {
    this.manga$.unsubscribe();
  }

  ngOnInit(): void {}

  getMangas() {
    const params: DictParams = { letter: this.letter };
    this.page > 1 && (params.page = this.page);
    this.loader = true;
    this.manga$ = this.manga.getMangas(params).subscribe({
      next: (res) => {
        this.setValues(res);
        this.title = `Mangas (${this.letter}: ${res.pagination.items.total})`;
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
      this.page = res.pagination.current_page;
      this.last = res.pagination.last_visible_page;
      this.pageNumbers = Utils.paginationNumbers(this.last, this.page);
    }
    this.loader = false;
  }

  mangaPage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { letter: this.letter, page },
    });
  }

  switchChar(letter: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { letter, page: 1 },
    });
  }
}
