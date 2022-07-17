import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { NewsCategories, NewsCountries, NewsLanguage, NewsSource } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {

  sources!: NewsSource[]

  categories = NewsCategories;
  selectedCtg = '';

  countries = NewsCountries;
  selectedCty = '';

  languages = NewsLanguage;
  selectedLng = ''

  filteredSources!: NewsSource[]


  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getData("sources");
    this.filteredSources = this.sources
  }

  async fetchSources() {
    const sources: any = await lastValueFrom(this.newsService.getSources())
    this.sources = sources.sources
    this.saveData("sources", this.sources)
  }

  private saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data))
    console.log("saved");

  }

  private getData(key: string): any {
    const res = localStorage.getItem(key);
    if (res && res !== null) {
      this.sources = JSON.parse(res);

    } else {
      this.fetchSources()
    }
  }

  filterSources() {
    this.filteredSources = this.sources.filter((source: NewsSource) => {
      return ((!this.selectedCtg || source.category == this.selectedCtg) && (!this.selectedCty || source.country == this.selectedCty) && (!this.selectedLng || source.language)) 
    })
  }

}
