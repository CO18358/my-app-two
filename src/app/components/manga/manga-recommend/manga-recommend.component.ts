import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecommendManga } from 'src/app/helpers/jikan.interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { MangaService } from 'src/app/services/manga/manga.service';

@Component({
  selector: 'app-manga-recommend',
  templateUrl: './manga-recommend.component.html',
  styleUrls: ['./manga-recommend.component.scss'],
})
export class MangaRecommendComponent implements OnInit, OnDestroy {
  loader!: boolean;
  results!: RecommendManga[];
  showPagination = false;
  current!: number;
  last!: number;
  pageNumbers?: number[];

  private manga$!: Subscription;
  constructor(
    private manga: MangaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.current = queryParams['page'] || 1;
      this.getRecommendations(queryParams);
    });
  }

  ngOnInit(): void {}

  getRecommendations(params?: any) {
    this.loader = true;
    this.manga$ = this.manga.recommendations(params).subscribe({
      next: (res) => {
        this.results = res.data.sort(
          (a, b) => b.content.length - a.content.length
        );
        this.showPagination = true;
        this.last = res.pagination.last_visible_page;
        this.pageNumbers = Utils.paginationNumbers(this.last, this.current);
        this.loader = false;
      },
    });
  }

  recommendationPage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
    });
  }

  ngOnDestroy(): void {
    this.manga$.unsubscribe();
  }
}
