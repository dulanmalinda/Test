import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedStockModalComponent } from './selected-stock-modal.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SelectedStockModalComponent],
  entryComponents:[SelectedStockModalComponent],
  exports:[SelectedStockModalComponent]
})
export class selectedStockModalComponentModule {}
