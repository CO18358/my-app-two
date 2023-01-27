import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Weather, WeatherCity } from 'src/app/helpers/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl = 'https://foreca-weather.p.rapidapi.com';
  headers = new HttpHeaders({
    'X-RapidAPI-Key': environment.rapid_api_key,
    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  searchLocation(query: string): Observable<WeatherCity[]> {
    return this.http
      .get(`${this.baseUrl}/location/search/${query}?lang=en`, {
        headers: this.headers,
      })
      .pipe(map((res: any) => res.locations as WeatherCity[]));
  }

  private currentWeather(locationId: number): Observable<Weather> {
    const params = {
      alt: '0',
      tempunit: 'C',
      windunit: 'KMH',
      tz: 'Asia/Kolkata',
      lang: 'en',
    };
    return this.http
      .get(`${this.baseUrl}/current/${locationId}`, {
        headers: this.headers,
        params,
      })
      .pipe(map((res: any) => res.current as Weather));
  }

  private hourlyWeather(locationId: number) {
    const params = {
      alt: '0',
      tempunit: 'C',
      windunit: 'KMH',
      tz: 'Asia/Kolkata',
      periods: '12',
      dataset: 'full',
      history: '0',
    };
    return this.http
      .get(`${this.baseUrl}/forecast/hourly/${locationId}`, {
        headers: this.headers,
        params,
      })
      .pipe(
        map((res: any) => {
          return res.forecast as any[];
        })
      );
  }

  private dailyWeather(locationId: number) {
    const params = {
      alt: '0',
      tempunit: 'C',
      windunit: 'KMH',
      periods: '12',
      dataset: 'full',
    };
    return this.http
      .get(`${this.baseUrl}/forecast/daily/${locationId}`, {
        headers: this.headers,
        params,
      })
      .pipe(
        map((res: any) => {
          return res.forecast as any[];
        })
      );
  }

  getWeather(locationId: number) {
    return forkJoin({
      current: this.currentWeather(locationId),
      hourly: this.hourlyWeather(locationId),
      daily: this.dailyWeather(locationId),
    });
  }
}
