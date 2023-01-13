import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { NewsLanguage, NewSortKeys, NewsSource } from 'src/app/helpers/news';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
})
export class MassComponent implements OnInit {
  articles!: any[];
  loader!: boolean;
  query = 'Bitcoin';
  orderBy = NewSortKeys;
  sortBy = this.orderBy[0];
  languages = NewsLanguage;
  selectedLng = this.languages[0].iso;

  constructor(private newsService: NewsService) {}

  async ngOnInit() {
    await this.searchMassNews();
  }

  async searchMassNews() {
    this.loader = true;
    const articles: any = await lastValueFrom(
      this.newsService.getMassNews(this.query.trim(), this.sortBy)
    );
    this.articles = articles.articles;
    this.loader = false;
  }
}
