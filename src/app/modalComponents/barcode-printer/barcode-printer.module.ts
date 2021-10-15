import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodePrinterComponent } from './barcode-printer.component';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBarcodeModule
  ],
  declarations: [BarcodePrinterComponent],
  entryComponents:[BarcodePrinterComponent],
  exports:[BarcodePrinterComponent]
})
export class BarcodePrinterComponentModule {}
