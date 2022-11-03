import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExercisesService {
  baseUrl = 'https://api.api-ninjas.com/v1/exercises';
  headers = new HttpHeaders({ 'X-Api-Key': environment.api_ninja_key });

  constructor(private http: HttpClient) {}

  getExercises(
    name: string,
    type: string,
    muscle: string,
    difficulty: string,
    offset: number
  ) {
    const params = { name, type, muscle, difficulty, offset: offset * 10 };

    return this.http.get(this.baseUrl, { headers: this.headers, params }).pipe(
      map((res) => {
        return res as any[];
      })
    );
  }
}
