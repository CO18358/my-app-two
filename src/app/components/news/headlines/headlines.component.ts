import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import {
  NewsCategories,
  NewsCountries,
  NewsLanguage,
} from 'src/app/helpers/news';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss'],
})
export class HeadlinesComponent implements OnInit {
  articles!: any[];
  loader!: boolean;
  query = '';
  categories = NewsCategories;
  selectedCtg = '';
  countries = NewsCountries;
  selectedCty = '';
  languages = NewsLanguage;
  selectedLng = this.languages[0].iso;

  constructor(private newsService: NewsService) {}

  async ngOnInit() {
    await this.searchHeadlines();
  }

  async searchHeadlines() {
    this.loader = true;
    const headlines: any = await lastValueFrom(
      this.newsService.getHeadlines(
        this.query.trim(),
        this.selectedCtg,
        this.selectedCty,
        this.selectedLng
      )
    );
    this.articles = headlines.articles;
    this.loader = false;
  }
}
