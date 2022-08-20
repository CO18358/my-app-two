import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { ClientDetailsComponent } from './invoice-form/client-details/client-details.component';
import { OrdersComponent } from './invoice-form/orders/orders.component';
import { PreviewComponent } from './invoice-form/preview/preview.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    InvoiceComponent,
    RegisterCompanyComponent,
    InvoiceFormComponent,
    ClientDetailsComponent,
    OrdersComponent,
    PreviewComponent,
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTableModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: true,
      positionClass: 'toast-bottom-right',
      tapToDismiss: true
    })
  ]
})
export class InvoiceModule { }
