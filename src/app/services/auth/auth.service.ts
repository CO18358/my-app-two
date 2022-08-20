import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  endpoint: string = environment.auth_endpoint;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: any = {};

  constructor(
    private http: HttpClient,
    public router: Router,
    private toastr: ToastrService
  ) { }

  // Sign-up
  signUp(user: User) {
    const api = `${this.endpoint}/register-user`;
    return this.http.post<any>(api, user);
  }

  // Sign-in
  signIn(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/signin`, user)
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('access_token', res.token);
          this.getUserProfile(res._id).subscribe((res) => {
            this.currentUser = res;
            localStorage.setItem('user', JSON.stringify(this.currentUser));
            // console.log(this.currentUser);
            this.toastr.success(`Welcome ${this.currentUser.name}`)
            this.router.navigate(['about/']);
          });
        },
        error: (err) => { this.toastr.error(err.error.message) }
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    const removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login/']);
    }
  }

  // User profile
  getUserProfile(id: any): Observable<any> {
    const api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      })
    );
  }

}