import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/interfaces';
import { Utils } from 'src/app/shared/utilties';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: any = {};

  constructor(public router: Router, private toastr: ToastrService) {}

  // Sign-up
  signUp(user: User) {
    console.log(user);
    try {
      localStorage.setItem(user.email, JSON.stringify(user));
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  // Sign-in
  signIn(user: User) {
    console.log(user);
    const userExists = localStorage.getItem(user.email);
    if (!userExists)
      this.toastr.error('Invalid Credentials', 'Please Try Again');
    else {
      const _user: User = JSON.parse(userExists);
      if (user.email == _user.email && user.password == _user.password) {
        this.currentUser = _user;
        localStorage.setItem('access_token', _user.user_id);
        this.toastr.success(`Welcome ${this.currentUser.name}`);
        console.log(this.currentUser);
        this.router.navigate(['about/']);
      } else {
        this.toastr.error('Invalid Credentials', 'Please Try Again');
      }
    }
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    const removeToken = localStorage.removeItem('access_token');
    this.currentUser = {};
    if (removeToken == null) {
      this.router.navigate(['login/']);
    }
  }
}
