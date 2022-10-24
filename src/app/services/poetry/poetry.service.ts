import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Poem } from 'src/app/helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PoetryService {
  baseUrl = 'https://poetrydb.org/';

  constructor(private http: HttpClient) {}

  getPoets() {
    return this.http.get(`${this.baseUrl}/author`).pipe(
      map((res: any) => {
        return res.authors as string[];
      })
    );
  }

  getPoembyPoets(poet: string) {
    return this.http
      .get<any[]>(`${this.baseUrl}/author/${encodeURIComponent(poet)}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getRandomPoem() {
    return this.http.get<Poem[]>(`${this.baseUrl}/random`).pipe(
      map((res) => {
        return res.pop() as Poem;
      })
    );
  }

  getRandomPoemByPoet(poet: string) {
    return this.http
      .get<any[]>(`${this.baseUrl}/author,random/${encodeURIComponent(poet)};1`)
      .pipe(
        map((res) => {
          return res.pop() as Poem;
        })
      );
  }

  searchPoem(title: string) {
    return this.http
      .get<any[]>(`${this.baseUrl}/title${encodeURIComponent(title)}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  totalPoems() {
    return this.http.get(`${this.baseUrl}/title`).pipe(
      map((res: any) => {
        return res.titles as string[];
      })
    );
  }
}
