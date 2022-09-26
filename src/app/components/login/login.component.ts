import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  validPattern = '^[a-zA-Z0-9]+$';

  signupForm: FormGroup = this.fb.group({
    name: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    ],
    user_id: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.validPattern),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
  });

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private toastr: ToastrService
  ) {
    if (this.authService.isLoggedIn == false) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {}

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }

  registerUser() {
    const res = this.authService.signUp(this.signupForm.value);
    if (res) {
      this.toastr.success('User Registered');
      this.signupForm.reset();
      this.redirectTo('login');
    }
  }

  loginUser() {
    this.authService.signIn(this.loginForm.value);
  }
}
