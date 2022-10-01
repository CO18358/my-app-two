import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  url = environment.omdb_api;

  constructor(private http: HttpClient) {}

  search(query: string) {
    return this.http.get(`${this.url}&s=${query}`);
  }

  searchAnotherPage(query: string, page: number) {
    return this.http.get(`${this.url}&s=${query}&page=${page}`);
  }

  findById(id: string) {
    return this.http.get(`${this.url}&i=${id}&plot=full`);
  }
}
