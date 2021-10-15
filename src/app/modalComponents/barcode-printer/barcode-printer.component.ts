import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-barcode-printer',
  templateUrl: './barcode-printer.component.html',
  styleUrls: ['./barcode-printer.component.scss'],
})
export class BarcodePrinterComponent implements OnInit {

  constructor(
    private modalCtrl:ModalController,
    public apiCalls:ApiCallsService,
  ) { }

  barcodeValue = "EMPTY VALUE"
  rowsBarcode = [1,2,3,4,5,6,7,8]

  ngOnInit() {
    this.barcodeValue = this.apiCalls.selectedItem.iId
  }

  async closeBTN(){
    await this.modalCtrl.dismiss();
  }

  printPage(){
    const printContent = document.getElementById("PrintInvoice");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();

    this.closeBTN();
  }

}
