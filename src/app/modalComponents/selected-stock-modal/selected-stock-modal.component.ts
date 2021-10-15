import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FormBuilder ,Validators} from '@angular/forms';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-selected-stock-modal',
  templateUrl: './selected-stock-modal.component.html',
  styleUrls: ['./selected-stock-modal.component.scss'],
})
export class SelectedStockModalComponent implements OnInit {

  get Amount(){
    return this.addStocksForm.get("Amount");
  }

  get Branch(){
    return this.addStocksForm.get("Branch");
  }

  addStocksForm = this.formbuilder.group({
    Amount:['',[Validators.required,Validators.maxLength(100)]],
  })

  transferStocksForm = this.formbuilder.group({
    Amount:['',[Validators.required,Validators.maxLength(100)]],
    Branch:['',[Validators.required]]
  })

  deleteStocksForm = this.formbuilder.group({
    Amount:['',[Validators.required,Validators.maxLength(100)]],
  })

  constructor(
    public apiCalls:ApiCallsService,
    public formbuilder:FormBuilder,
    private modalCtrl:ModalController,
    public alertcontroller:AlertController
  ) { }

  availabeBraches = []

  ngOnInit() {
    this.getBranches();
  }

  async closeBTN(){
    await this.modalCtrl.dismiss();
  }

  getBranches(){
    this.apiCalls.getBranches()
      .subscribe(
        (response) => {
          response.forEach(e => {
            if(e.branchCode != this.apiCalls.selectedStock.branchCode){
              this.availabeBraches.push(e);
            }
          });                        
        },
        (error) => {                            
          console.error('Request failed with error')
        })
  }

  addBTN(){
    this.apiCalls.presentLoading("Please wait..");
    var itemID = this.apiCalls.selectedStock.itemId;
    var qty = this.addStocksForm.get("Amount").value;
    var branchCode = this.apiCalls.selectedStock.branchCode
    this.apiCalls.addStocks(itemID,branchCode,qty)
      .subscribe(
        (response) => {            
          this.apiCalls.loadingController.dismiss()
          this.apiCalls.presentAlert("Stocks Added",true)  
          this.closeBTN()            
        },
        (error) => {          
          this.apiCalls.loadingController.dismiss()
          this.apiCalls.presentAlert("Error occured! Try again",true)                    
        })
   }

   transferBTN(){
    var senderBranch = this.apiCalls.selectedStock.branchCode;
    var receiverBranch = this.transferStocksForm.get("Branch").value;
    var itemID = this.apiCalls.selectedStock.itemId;
    var qty = this.transferStocksForm.get("Amount").value;

    if(this.apiCalls.selectedStock.currentStock > qty){
      this.apiCalls.presentLoading("Please wait..");
      this.apiCalls.transferStocks(senderBranch,receiverBranch,itemID,qty)
      .subscribe(
        (response) => {            
          this.apiCalls.loadingController.dismiss()
          this.apiCalls.presentAlert("Stocks Tranfered",true)  
          this.closeBTN()            
        },
        (error) => {          
          this.apiCalls.loadingController.dismiss()
          this.apiCalls.presentAlert("Error occured! Try again",true)                    
        })
    }else{ 
      this.apiCalls.presentAlert("Invalid request",true)
    }
   }

   deleteBTN(){
    var itemID = this.apiCalls.selectedStock.itemId;
    var qty = -this.deleteStocksForm.get("Amount").value;
    var branchCode = this.apiCalls.selectedStock.branchCode

    if (this.apiCalls.selectedStock.currentStock >= -qty){
      this.apiCalls.presentLoading("Please wait..");
      this.apiCalls.deleteStocks(itemID,branchCode,qty)
      .subscribe(
        (response) => {            
          this.apiCalls.loadingController.dismiss()
          this.apiCalls.presentAlert("Stocks Deleted",true)  
          this.closeBTN()            
        },
        (error) => {          
          this.apiCalls.loadingController.dismiss()
          this.apiCalls.presentAlert("Error occured! Try again",true)                    
        }) 
    }else{
      this.apiCalls.presentAlert("Invalid Request",true) 
      this.closeBTN()   
    }
   }

   async deleteAlert(){
    const alert = await this.alertcontroller.create({
      message : "Are you sure want to delete stocks",
      buttons : [{
        text : 'NO',
        role: 'cancel',
      },{
        text : 'YES',
        handler: () => {
          this.deleteBTN()
        }
      }]
    });

    await alert.present();
  }
}
