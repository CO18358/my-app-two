import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { REGEX } from 'src/app/models/constants';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent implements OnInit {
  constructor(
    private invoiceService: InvoiceService,
    private fb: FormBuilder
  ) {}
  step = 2;

  customerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    contact: [
      '',
      [Validators.required, Validators.pattern(REGEX.mobileNumber)],
    ],
  });

  companyForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    contact: [
      '',
      [Validators.required, Validators.pattern(REGEX.mobileNumber)],
    ],
  });

  clientData!: any;
  companyData!: any;
  ordersData!: any;

  selectedFile: any;

  ngOnInit(): void {}

  setStep(index: number) {
    this.step = index;
  }

  prevStep() {
    this.step--;
  }

  saveCustomerDetail() {
    if (this.customerForm.valid) {
      this.clientData = this.customerForm.value;
      this.step++;
    }
  }

  saveCompanyDetail() {
    if (this.companyForm.valid) {
      this.companyData = this.companyForm.value;
      this.step++;
    }
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(event, this.selectedFile);
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {
      console.log(JSON.parse(fileReader.result as string));
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }
}
