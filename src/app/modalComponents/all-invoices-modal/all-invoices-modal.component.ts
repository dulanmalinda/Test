import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { SelectedInvoiceModalComponent } from '../selected-invoice-modal/selected-invoice-modal.component';


@Component({
  selector: 'app-all-invoices-modal',
  templateUrl: './all-invoices-modal.component.html',
  styleUrls: ['./all-invoices-modal.component.scss'],
})
export class AllInvoicesModalComponent implements OnInit {

  returnedInvoices = [];

  constructor(
    public apiCalls:ApiCallsService,
    private modalCtrl:ModalController,
  ) { }

  ngOnInit() {
    this.retreiveInvoices();
  }

  async closeBTN(){
    await this.modalCtrl.dismiss();
  }


  retreiveInvoices(){
    this.apiCalls.getAllInvoices()
      .subscribe(
        (response) => {                           
          this.returnedInvoices = response
        },
        (error) => {                            
          console.error('Request failed with error')
        })
  }

  selectInvoice(event : any){
    this.apiCalls.selectedInvoice = event;
    this.invoiceSelectEvent()
  }

  async invoiceSelectEvent(){
    const modal = await this.modalCtrl.create({
      component : SelectedInvoiceModalComponent
    })
    await modal.present()
  }


}
