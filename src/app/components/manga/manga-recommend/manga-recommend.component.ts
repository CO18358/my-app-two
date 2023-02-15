import { Component, OnDestroy, OnInit } from '@angular/core';
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

  private subscription!: Subscription;
  constructor(private manga: MangaService) {}

  ngOnInit(): void {
    this.current = 1;
    this.getRecommendations();
  }

  getRecommendations(params?: any) {
    this.loader = true;
    this.subscription = this.manga.recommendations(params).subscribe({
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
    this.current = page;
    this.getRecommendations({ page });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
