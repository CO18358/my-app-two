import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { OrdersComponent } from './orders/orders.component';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  @ViewChild(ClientDetailsComponent) public form1: ClientDetailsComponent | undefined;
  @ViewChild(OrdersComponent) public form2: OrdersComponent | undefined;


  constructor(
    private invoiceService: InvoiceService,
  ) {
  }

  ngOnInit(): void {
  }

  ordersReceived(): boolean {
    return (this.invoiceService.clientOrder && this.invoiceService.clientOrder.length) ? true : false;
  }

}
