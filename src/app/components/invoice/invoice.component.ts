import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceCompanyResponse, User } from 'src/app/models/interfaces';
import { CountryDataService } from 'src/app/services/invoice/country-data.service';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  isRegistered!: boolean;
  companyFormTitle!: string;
  updateForm!: boolean;
  companyId = ''

  currentUser!: User;
  company!: InvoiceCompanyResponse;

  showForm: boolean = true;


  constructor(
    private invoiceService: InvoiceService,
    private countryDataService: CountryDataService,
    public dialog: MatDialog
  ) {
    const user = localStorage.getItem('user')
    this.currentUser = (user) ? JSON.parse(user) : {}
  }

  ngOnInit(): void {
    this.countryDataService.countriesList();
    this.invoiceService.getCompany(this.currentUser.user_id).subscribe({
      next: (value: any) => {
        this.company = value;
        this.isRegistered = true;
      },
      error: (err) => {
        this.isRegistered = false;
        this.companyFormTitle = "Register New Company"
        this.updateForm = false;
      },
    });
  }

  invoiceForm() {
    this.showForm = !this.showForm
  }

  editCompanyDetails() {
    this.dialog.open(ConfirmDialogComponent, { autoFocus: false }).afterClosed().subscribe(res => {
      if (res) {
        this.isRegistered = false;
        this.companyFormTitle = "Update Current Details";
        this.updateForm = true;
        this.companyId = this.company._id;
      }
    })
  }

}

