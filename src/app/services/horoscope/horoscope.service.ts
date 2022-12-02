import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HoroscopeService {
  baseUrl = 'https://aztro.sameerkumar.website/';

  constructor(private http: HttpClient) {}

  fetchHoroscope(sign: string, day: string) {
    return this.http.post(`${this.baseUrl}?sign=${sign}&day=${day}`, {});
  }
}
