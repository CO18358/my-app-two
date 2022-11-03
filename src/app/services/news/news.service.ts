import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsSource } from 'src/app/helpers/news';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  API_KEY = environment.news_api_key;

  MASS_URL =
    'https://newsapi.org/v2/everything?apiKey=' + this.API_KEY + '&language=en';
  HEADLINES_URL =
    'https://newsapi.org/v2/top-headlines?apiKey=' +
    this.API_KEY +
    '&pageSize=100';
  SOURCES_URL =
    'https://newsapi.org/v2/top-headlines/sources?apiKey=' + this.API_KEY;

  constructor(private http: HttpClient) {}

  getSources(): Observable<NewsSource[]> {
    return this.http.get<NewsSource[]>(this.SOURCES_URL);
  }

  getMassNews(query: string, sort: string) {
    query = query.replace(' ', '%20');
    let url = this.MASS_URL + '&q=' + query + '&sortBy' + sort;
    return this.http.get(url);
  }

  getHeadlines(query: string, ctg: string, cty: string, lng: string) {
    let url = this.HEADLINES_URL;

    if (query && query !== '') {
      query = query.replace(' ', '%20');
      url = url + '&q=' + query;
    }
    if (cty && cty !== '') {
      url = url + '&country=' + cty;
    }
    if (ctg && ctg !== '') {
      url = url + '&category=' + ctg;
    }
    if (lng && lng !== '') {
      url = url + '&language=' + lng;
    }

    return this.http.get(url);
  }
}
