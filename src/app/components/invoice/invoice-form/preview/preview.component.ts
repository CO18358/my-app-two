import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/interfaces';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  tableColums: string[] = ['name', 'price', 'quantity', 'discount', 'tax', 'subtotal'];
  items !: Item[]

  constructor(
    private invoiceService: InvoiceService
  ) {
  }

  ngOnInit(): void {
    this.items = this.invoiceService.clientOrder;
    console.log(this.items);
  }

  getTotalValue() {
    return this.items.map(item => item.subtotal).reduce((acc, value) => acc + value, 0)
  }
}
