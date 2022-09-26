import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvoiceCompany } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  company: any = {};

  constructor(
    private http: HttpClient,
    public router: Router,
    private toastr: ToastrService
  ) {}

  get isRegistered(): boolean {
    const company = localStorage.getItem('invoice_company');
    return company !== null ? true : false;
  }

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }

  getCompany(user_id: string) {
    // const api = `${this.endpoint}/get-company`;
    // return this.http.post(api, { user_id: user_id });
  }

  registerCompany(value: InvoiceCompany) {
    console.log(value);

    // const api = `${this.endpoint}/register-company`;
    // this.http.post(api, value).subscribe({
    //   next: (value: any) => {
    //     this.toastr.success(value.message);
    //     this.redirectTo('invoice/');
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }

  updateCompany(id: string, value: InvoiceCompany) {
    // const api = `${this.endpoint}/company/${id}`;
    // this.http.patch(api, value).subscribe({
    //   next: (value: any) => {
    //     this.toastr.success('Company Profile Updated');
    //     this.redirectTo('invoice/');
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }
}
