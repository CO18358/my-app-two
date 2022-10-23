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
    type?: string,
    muscle?: string,
    difficulty?: string,
    offset?: number
  ) {
    const params = new HttpParams();
    type && params.append('type', type);
    muscle && params.append('muscle', muscle);
    difficulty && params.append('offset', difficulty);
    offset && params.append('offset', offset);

    return this.http.get(this.baseUrl, { headers: this.headers, params }).pipe(
      map((res) => {
        return res as any[];
      })
    );
  }
}
