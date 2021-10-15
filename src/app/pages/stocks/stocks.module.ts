import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { StocksPageRoutingModule } from './stocks-routing.module';

import { StocksPage } from './stocks.page';
import { selectedStockModalComponentModule } from 'src/app/modalComponents/selected-stock-modal/selected-stock-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StocksPageRoutingModule,
    Ng2SearchPipeModule,
    selectedStockModalComponentModule
  ],
  declarations: [StocksPage]
})
export class StocksPageModule {}
