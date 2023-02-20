import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recommended } from 'src/app/helpers/jikan.interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { AnimeService } from 'src/app/services/anime/anime.service';

@Component({
  selector: 'app-anime-recommend',
  templateUrl: './anime-recommend.component.html',
  styleUrls: ['./anime-recommend.component.scss'],
})
export class AnimeRecommendComponent implements OnInit, OnDestroy {
  loader!: boolean;
  results!: Recommended[];
  showPagination = false;
  current!: number;
  last!: number;
  pageNumbers?: number[];

  private anime$!: Subscription;
  constructor(
    private anime: AnimeService,
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
    this.anime$ = this.anime.recommendations(params).subscribe({
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
    this.anime$.unsubscribe();
  }
}
