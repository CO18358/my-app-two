import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.scss']
})
export class RemarksComponent implements OnInit {

  form = new FormGroup({
    t_n_c: new FormControl(''),
    notes: new FormControl('')
  })

  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnInit(): void {
  }

  upload() {
    this.invoiceService.remark = this.form.value;
    this.invoiceService.uploadInvoice();
  }

}
