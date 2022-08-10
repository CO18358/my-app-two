import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { NewsCategories, NewsCountries, NewsLanguage } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {

  articles!: any[]

  query = ''

  categories = NewsCategories;
  selectedCtg = '';

  countries = NewsCountries;
  selectedCty = '';

  languages = NewsLanguage;
  selectedLng = this.languages[0].iso;

  constructor(private newsService: NewsService) { }

  async ngOnInit() {
    await this.getData("headlines")
  }

  async searchHeadlines() {
    const headlines: any = await lastValueFrom(this.newsService.getHeadlines(this.query.trim(), this.selectedCtg, this.selectedCty, this.selectedLng))
    this.articles = headlines.articles;
    this.saveData("headlines", this.articles);
  }

  private saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data))
    console.log("saved");

  }

  private getData(key: string): any {
    const res = localStorage.getItem(key);
    if (res && res !== null) {
      this.articles = JSON.parse(res);

    } else {
      this.searchHeadlines()
    }
  }

}
