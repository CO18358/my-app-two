import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  form: FormGroup = this.fb.group({
    items: this.fb.array([this.newItem()])
  });


  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService) {
  }

  get isCompleted(): boolean {
    return this.form.valid
  }

  get itemControls(): FormArray<FormGroup> {
    return <FormArray>this.form.controls["items"]
  }

  ngOnInit(): void {
  }

  newItem(): FormGroup {
    const formObj = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      quantity: ['1', Validators.required],
      discount: ['0', Validators.required],
      tax: ['0', Validators.required],
    })
    return formObj
  }

  addItem() {
    this.itemControls.push(this.newItem())
  }

  removeItem(index: number) {
    this.itemControls.removeAt(index);
    if (!this.itemControls.controls.length) this.addItem();

  }

  save() {
    if (this.form.valid) {
      this.invoiceService.setClientOrder(this.form.value.items)
    }
  }

} 
