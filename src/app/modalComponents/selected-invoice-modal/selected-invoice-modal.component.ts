import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-selected-invoice-modal',
  templateUrl: './selected-invoice-modal.component.html',
  styleUrls: ['./selected-invoice-modal.component.scss'],
})
export class SelectedInvoiceModalComponent implements OnInit {

  constructor(
    public apiCalls:ApiCallsService,
    private modalCtrl:ModalController,
  ) { }

  ngOnInit() {
  }

  async closeBTN(){
    await this.modalCtrl.dismiss();
  }

}
