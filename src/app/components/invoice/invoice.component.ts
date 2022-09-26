import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceCompany, User } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CountryDataService } from 'src/app/services/invoice/country-data.service';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  isRegistered!: boolean;
  companyFormTitle!: string;
  updateForm!: boolean;
  showForm: boolean = true;

  constructor(
    private invoiceService: InvoiceService,
    private countryDataService: CountryDataService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // this.countryDataService.countriesList();
    this.isRegistered = true;
  }

  invoiceForm() {
    this.showForm = !this.showForm;
  }

  editCompanyDetails() {
    this.dialog
      .open(ConfirmDialogComponent, { autoFocus: false })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.isRegistered = false;
          this.companyFormTitle = 'Update Current Details';
          this.updateForm = true;
        }
      });
  }
}
