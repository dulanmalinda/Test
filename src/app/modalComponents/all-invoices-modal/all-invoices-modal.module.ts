import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllInvoicesModalComponent } from './all-invoices-modal.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { selectedItemModalComponentModule } from '../selected-item-modal/selected-item-modal.module';
import { SelectedInvoiceModalComponent } from '../selected-invoice-modal/selected-invoice-modal.component';
import { SelectedInvoiceModalComponentModule } from '../selected-invoice-modal/selected-invoice-modal.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBarcodeModule,
    selectedItemModalComponentModule,
    SelectedInvoiceModalComponentModule
  ],
  declarations: [AllInvoicesModalComponent],
  entryComponents:[AllInvoicesModalComponent],
  exports:[AllInvoicesModalComponent]
})
export class AllInvoicesModalComponentModule {}
