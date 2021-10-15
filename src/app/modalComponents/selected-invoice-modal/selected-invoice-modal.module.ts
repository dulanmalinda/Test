import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SelectedInvoiceModalComponent } from './selected-invoice-modal.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [SelectedInvoiceModalComponent],
  entryComponents:[SelectedInvoiceModalComponent],
  exports:[SelectedInvoiceModalComponent]
})
export class SelectedInvoiceModalComponentModule {}
