import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsPageRoutingModule } from './items-routing.module';

import { ItemsPage } from './items.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { addItemModalComponentModule } from 'src/app/modalComponents/add-item-modal/add-item-modal.module';
import { selectedItemModalComponentModule } from 'src/app/modalComponents/selected-item-modal/selected-item-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule,
    Ng2SearchPipeModule,
    addItemModalComponentModule,
    selectedItemModalComponentModule
  ],
  declarations: [ItemsPage]
})
export class ItemsPageModule {}
