import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  validPattern = "^[a-zA-Z0-9]+$";

  signupForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.validPattern)]],
    confirmPassword: ['', [Validators.required,]]
  });

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });


  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    if (this.authService.isLoggedIn == true) {
      this.router.navigate(['/about'])
    }
  }

  ngOnInit(): void {
  }

  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res.result) {
        this.signupForm.reset();
        this.router.navigate(['log-in']);
      }
    });
  }

  loginUser() {

    this.authService.signIn(this.loginForm.value);
  }

}
