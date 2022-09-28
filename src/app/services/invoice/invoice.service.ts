import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import pdfMake from 'pdfmake/build/pdfmake';
import { saveAs } from 'file-saver';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  company: any = {};

  constructor(public router: Router, private toastr: ToastrService) {}

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }

  createPdf(customer: any, company: any, orders: any[], bill: any) {
    const docDefinition = {
      content: [
        {
          columns: [
            [
              { text: company.name, bold: true },
              { text: company.address },
              { text: company.contact },
              { text: company.email },
            ],
            [
              {
                text: 'INVOICE',
                fontSize: 32,
                bold: true,
                alignment: 'right',
                color: '#272727',
              },
            ],
          ],
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader',
        },
        {
          columns: [
            [
              { text: customer.name },
              { text: customer.address },
              { text: customer.contact },
              { text: customer.email },
            ],
            [
              { text: `Bill ID: ${bill.id}`, alignment: 'right' },
              { text: `Invoice Date: ${bill.gen_date}`, alignment: 'right' },
              { text: `Due Date: ${bill.due_date}`, alignment: 'right' },
            ],
          ],
        },
        {
          text: 'Order Details',
          style: 'sectionHeader',
        },
        {
          columns: [
            { width: '*', text: '' },
            {
              width: 'auto',
              table: {
                headerRows: 1,
                body: [
                  Object.keys(orders[0]),
                  orders.map(({ ...rest }) => Object.values(rest)),
                ],
              },
            },
            { width: '*', text: '' },
          ],
        },
        {
          columns: [
            [
              {
                text: bill.subtotal,
                alignment: 'right',
                margin: [0, 15, 0, 0],
              },
              { text: `Subtotal: ${bill.discount}`, alignment: 'right' },
              { text: `Discount: ${bill.discount}`, alignment: 'right' },
              { text: `Tax: ${bill.tax}`, alignment: 'right' },
              { text: `Shipping: ${bill.shipping}`, alignment: 'right' },
              { text: `Total: ${bill.total}`, alignment: 'right' },
            ],
          ],
        },
        {
          text: 'Foot Notes',
          style: 'sectionHeader',
        },
        {
          text: bill.notes,
        },
        {
          text: 'Terms & Condition',
          style: 'sectionHeader',
        },
        {
          text: bill.terms,
        },
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15],
        },
      },
    };
    const invoice = pdfMake.createPdf(docDefinition);
    invoice.getBuffer((buffer: BlobPart) => {
      let blob = new Blob([buffer]);
      saveAs(blob, `Invoice_${bill.id}.pdf`);
    });
  }
}
