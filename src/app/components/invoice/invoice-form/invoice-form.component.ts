import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { REGEX } from 'src/app/models/constants';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { Utils } from 'src/app/shared/utilties';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent implements OnInit {
  constructor(
    private invoiceService: InvoiceService,
    private fb: FormBuilder,
    private toastr: ToastrService
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
  columns!: string[];
  showOrders = false;

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
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {
      switch (this.selectedFile.type) {
        case 'application/json': {
          this.ordersData = JSON.parse(fileReader.result as string);
          console.log(this.ordersData);
          this.columns = Object.keys(this.ordersData[0]);
          this.showOrders = true;
          break;
        }
        case 'text/csv': {
          this.ordersData = Utils.csvToArray(fileReader.result as string);
          console.log(this.ordersData);
          this.columns = Object.keys(this.ordersData[0]);
          this.showOrders = true;
          break;
        }
        default: {
          this.toastr.error('Please upload another file', 'Invalid File Type');
        }
      }
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }
}
