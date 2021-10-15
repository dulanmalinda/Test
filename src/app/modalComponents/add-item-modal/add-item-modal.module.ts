import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemModalComponent } from './add-item-modal.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AddItemModalComponent],
  entryComponents:[AddItemModalComponent],
  exports:[AddItemModalComponent]
})
export class addItemModalComponentModule {}
