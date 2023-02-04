import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';
import { TriviaResponse } from 'src/app/helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  baseUrl = 'https://opentdb.com/';

  constructor(private http: HttpClient) {}

  getQuestions(amount: number, difficulty: string, type: string) {
    const url = `${this.baseUrl}api.php`;
    const params: any = {
      amount,
      encode: 'url3986',
    };
    !!difficulty && (params.difficulty = difficulty);
    !!type && (params.type = type);

    return this.http.get<TriviaResponse>(url, { params }).pipe(
      map((res) => {
        return res.results;
      })
    );
  }
}
