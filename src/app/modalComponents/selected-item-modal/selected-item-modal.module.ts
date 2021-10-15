import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedItemModalComponent } from './selected-item-modal.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { BarcodePrinterComponentModule } from '../barcode-printer/barcode-printer.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBarcodeModule,
    BarcodePrinterComponentModule
  ],
  declarations: [SelectedItemModalComponent],
  entryComponents:[SelectedItemModalComponent],
  exports:[SelectedItemModalComponent]
})
export class selectedItemModalComponentModule {}
