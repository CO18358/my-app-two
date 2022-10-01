import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { REGEX } from 'src/app/models/constants';
import { CountryDataService } from 'src/app/services/invoice/country-data.service';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { Utils } from 'src/app/shared/utilties';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  step = 0;

  customerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    contact: [
      '',
      [Validators.required, Validators.pattern(REGEX.mobileNumber)],
    ],
  });
  clientData!: any;

  companyForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    contact: [
      '',
      [Validators.required, Validators.pattern(REGEX.mobileNumber)],
    ],
  });
  companyData!: any;

  selectedFile: any;
  ordersData!: any;
  columns!: string[];
  showOrders = false;

  bill_id = Utils.randomString();
  gen_date!: Date;
  due_date!: Date;
  billForm: FormGroup = this.fb.group({
    subtotal: ['', [Validators.required]],
    discount: [''],
    tax: [''],
    shipping: [''],
    notes: [''],
    terms: [''],
  });
  subtotal: number = 0;
  discount: number = 0;
  tax: number = 0;
  shipping: number = 0;
  total: number = 0;
  billData!: any;

  constructor(
    private invoiceService: InvoiceService,
    private countryService: CountryDataService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.billForm.get('subtotal')?.valueChanges.subscribe((res) => {
      this.subtotal = res;
      this.calculate();
    });
    this.billForm.get('discount')?.valueChanges.subscribe((res) => {
      if (res >= 0 && res <= 100) {
        this.discount = res / 100;
        this.calculate();
      }
    });
    this.billForm.get('tax')?.valueChanges.subscribe((res) => {
      if (res >= 0 && res <= 100) {
        this.tax = res / 100;
        this.calculate();
      }
    });
    this.billForm.get('shipping')?.valueChanges.subscribe((res) => {
      this.shipping = res;
      this.calculate();
    });
  }

  calculate() {
    const discounted = this.subtotal - this.subtotal * this.discount;
    const taxed = discounted + discounted * this.tax;
    this.total = taxed + this.shipping;
  }

  setStep(index: number) {
    this.step = index;
  }

  prevStep() {
    this.step--;
  }

  saveCompanyDetail() {
    if (this.companyForm.valid) {
      this.companyData = this.companyForm.value;
      this.step++;
    }
  }
  saveCustomerDetail() {
    if (this.customerForm.valid) {
      this.clientData = this.customerForm.value;
      this.step++;
    }
  }
  saveOrders() {
    this.ordersData && this.ordersData.length && this.step++;
  }
  finalizeBill() {
    if (this.billForm.valid) {
      this.billData = this.billForm.value;
      this.billData.id = this.bill_id;
      this.billData.total = this.total;
      this.billData.gen_date = this.gen_date.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      this.billData.due_date = this.due_date.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      this.invoiceService.createPdf(
        this.clientData,
        this.companyData,
        this.ordersData,
        this.billData
      );
    }
  }

  checkDate() {
    if (this.gen_date > this.due_date) {
      this.due_date = this.gen_date;
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
          this.columns = Object.keys(this.ordersData[0]);
          this.showOrders = true;
          break;
        }
        case 'text/csv': {
          this.ordersData = Utils.csvToArray(fileReader.result as string);
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
