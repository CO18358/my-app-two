import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { NewsLanguage, NewSortKeys, NewsSource } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
})
export class MassComponent implements OnInit {
  articles!: any[];
  sources!: NewsSource[];

  query = 'Bitcoin';

  orderBy = NewSortKeys;
  sortBy = this.orderBy[0];

  languages = NewsLanguage;
  selectedLng = this.languages[0].iso;

  constructor(private newsService: NewsService) {}

  async ngOnInit() {
    await this.getData('sources');
    await this.getData('massNews');
  }

  async searchMassNews() {
    const articles: any = await lastValueFrom(
      this.newsService.getMassNews(this.query.trim(), this.sortBy)
    );
    this.articles = articles.articles;
  }

  async fetchSources() {
    const sources: any = await lastValueFrom(this.newsService.getSources());
    this.sources = sources.sources;
    this.saveData('sources', this.sources);
  }

  private saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  private getData(key: string): any {
    if (key == 'sources') {
      const res = localStorage.getItem(key);
      if (res && res !== null) {
        this.articles = JSON.parse(res);
      } else this.fetchSources();
    } else {
      this.searchMassNews();
    }
  }
}
