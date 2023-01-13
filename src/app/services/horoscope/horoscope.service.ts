import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Horoscope } from 'src/app/helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HoroscopeService {
  baseUrl = 'https://aztro.sameerkumar.website/';

  constructor(private http: HttpClient) {}

  fetchHoroscope(sign: string) {
    return forkJoin([
      this.yesterday(sign),
      this.today(sign),
      this.tomorrow(sign),
    ]).pipe(
      map(([yst, tdy, tmr]) => {
        return {
          yesterday: yst,
          today: tdy,
          tomorrow: tmr,
        };
      })
    );
  }

  today(sign: string): Observable<Horoscope> {
    return this.http.post<Horoscope>(
      `${this.baseUrl}?sign=${sign}&day=today`,
      {}
    );
  }

  yesterday(sign: string): Observable<Horoscope> {
    return this.http.post<Horoscope>(
      `${this.baseUrl}?sign=${sign}&day=yesterday`,
      {}
    );
  }

  tomorrow(sign: string): Observable<Horoscope> {
    return this.http.post<Horoscope>(
      `${this.baseUrl}?sign=${sign}&day=tomorrow`,
      {}
    );
  }
}
