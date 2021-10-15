import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoicesPageRoutingModule } from './invoices-routing.module';

import { InvoicesPage } from './invoices.page';
import { AllInvoicesModalComponentModule } from 'src/app/modalComponents/all-invoices-modal/all-invoices-modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicesPageRoutingModule,
    AllInvoicesModalComponentModule
  ],
  declarations: [InvoicesPage]
})
export class InvoicesPageModule {}
