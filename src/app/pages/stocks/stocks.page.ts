import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { SelectedStockModalComponent } from 'src/app/modalComponents/selected-stock-modal/selected-stock-modal.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.page.html',
  styleUrls: ['./stocks.page.scss'],
})
export class StocksPage implements OnInit {

  filterTerm:string;
  returnedItems = [];
  availabeBraches = [];

  constructor(
    public apicalls :ApiCallsService,
    private modalCtrl: ModalController,
    private router:Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.apicalls.requirePane = true
    this.getAllStocks();
    this.getAllBranches();

    this.apicalls.encodeURL();
  }

  getAllStocks(){
    this.apicalls.getStocks()
      .subscribe(
        (response) => {                           
          this.returnedItems = response
        },
        (error) => {                            
          console.error('Request failed with error')
        })
  }

  getAllBranches(){
    this.apicalls.getBranches()
      .subscribe(
        (response) => {                           
          this.availabeBraches = response
        },
        (error) => {                            
          console.error('Request failed with error')
        })
  }

  async selectedStockEvent(){
    const modal = await this.modalCtrl.create({
      component : SelectedStockModalComponent
    })
    await modal.present()
  }

  selectStock(event : any){
    this.apicalls.selectedStock = event;
    this.selectedStockEvent()
  }

  calculateStockVal(amount,cost){
    var val = amount * cost;
    return val;
  }

}
