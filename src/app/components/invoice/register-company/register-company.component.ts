import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { REGEX } from 'src/app/models/constants';
import { InvoiceCompany } from 'src/app/models/interfaces';
import { CountryDataService } from 'src/app/services/invoice/country-data.service';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { Utils } from 'src/app/shared/utilties';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss'],
})
export class RegisterCompanyComponent implements OnInit {
  @Input() title!: string;
  @Input() mode!: boolean;
  @Input() id!: string;

  countryList!: string[];
  filteredCountryList!: Observable<string[]>;

  postalCode!: string;
  callingCode!: string;

  companyForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    country: ['', [Validators.required, this.valueExists.bind(this)]],
    pincode: [
      '',
      [
        Validators.required,
        Validators.pattern(REGEX.postalCode),
        Validators.minLength(4),
        Validators.maxLength(6),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    contact: [
      '',
      [
        Validators.required,
        Validators.pattern(REGEX.mobileNumber),
        Validators.minLength(6),
        Validators.maxLength(14),
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private countryDataService: CountryDataService,
    private invoiceService: InvoiceService
  ) {
    this.countryList = this.countryDataService.countriesList();
  }

  ngOnInit() {
    this.filteredCountryList = this.companyForm.controls[
      'country'
    ].valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    this.companyForm.controls['country'].valueChanges.subscribe((res) => {
      if (this.companyForm.controls['country'].valid) {
        const lookup = this.countryDataService.lookup(res);
        // console.log(lookup);
        this.postalCode = lookup.alpha2;
        this.callingCode = lookup.countryCallingCodes[0];
      } else {
        this.postalCode = '';
        this.callingCode = '';
      }
    });
  }

  save() {
    const data: InvoiceCompany = this.companyForm.value;
    data.pincode = this.postalCode + ' ' + data.pincode;
    data.contact = this.callingCode + ' ' + data.contact;
    data._id = 'comp_id_' + Utils.numId();

    // if (this.mode) {
    //   this.invoiceService.updateCompany(this.id, data);
    // } else {
    //   this.invoiceService.registerCompany(data);
    // }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countryList.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private valueExists(countrol: FormControl) {
    const hasValue =
      this.countryList && this.countryList.includes(countrol.value);
    return hasValue ? true : { invalid: true };
  }
}
