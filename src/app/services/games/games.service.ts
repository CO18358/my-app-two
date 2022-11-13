import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GameDetails, GameDetailsExtended } from 'src/app/helpers/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/';
  headers = new HttpHeaders({
    'X-RapidAPI-Key': environment.rapid_api_key,
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getAllGames() {
    return this.http
      .get<GameDetails[]>(`${this.baseUrl}games`, {
        headers: this.headers,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getGameById(id: number) {
    return this.http
      .get<GameDetailsExtended>(`${this.baseUrl}/game?id=${id}`, {
        headers: this.headers,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
