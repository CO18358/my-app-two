import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { REGEX } from 'src/app/models/constants';
import { InvoiceCompany } from 'src/app/models/interfaces';
import { CountryDataService } from 'src/app/services/invoice/country-data.service';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {


  countryList!: string[];
  filteredCountryList!: Observable<string[]>;
  postalCode!: string;
  callingCode!: string;

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    country: ['', [Validators.required, this.valueExists.bind(this)]],
    pincode: ['', [Validators.required, Validators.pattern(REGEX.postalCode), Validators.minLength(4), Validators.maxLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, Validators.pattern(REGEX.mobileNumber), Validators.minLength(6), Validators.maxLength(14)]],
  });
  constructor(
    private fb: FormBuilder,
    private countryDataService: CountryDataService,
    private invoiceService: InvoiceService

  ) {
    this.countryList = this.countryDataService.countriesList()
  }

  ngOnInit(): void {
    this.filteredCountryList = this.form.controls['country'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.form.controls['country'].valueChanges.subscribe(res => {
      if (this.form.controls['country'].valid) {
        const lookup = this.countryDataService.lookup(res);
        // console.log(lookup);
        this.postalCode = lookup.alpha2;
        this.callingCode = lookup.countryCallingCodes[0];
      } else {
        this.postalCode = '';
        this.callingCode = '';
      }
    })
  }

  save() {
    const data: InvoiceCompany = this.form.value;
    data.pincode = this.postalCode + "-" + data.pincode;
    data.contact = this.callingCode + "-" + data.contact;
    this.invoiceService.address = data;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countryList.filter(option => option.toLowerCase().includes(filterValue));
  }

  private valueExists(countrol: FormControl) {
    const hasValue = this.countryList && this.countryList.includes(countrol.value);
    return hasValue ? true : { 'invalid': true }
  }

  get isCompleted(): boolean {
    return this.form.valid
  }

}
