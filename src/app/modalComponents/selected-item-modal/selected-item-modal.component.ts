import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiCallsService, item } from 'src/app/services/api-calls.service';
import { BarcodePrinterComponent } from '../barcode-printer/barcode-printer.component';

@Component({
  selector: 'app-selected-item-modal',
  templateUrl: './selected-item-modal.component.html',
  styleUrls: ['./selected-item-modal.component.scss'],
})
export class SelectedItemModalComponent implements OnInit {

  barcodeValue = "EMPTY VALUE"
  
  item:item = {
    name:"",
    catName:"",
    brandName:"",
    tag:"",
    cost:"",
    price:"",
    disValue:"",
  }

  //#region Form validation
  get name(){
    return this.registrationForm.get("name");
  }
  
  get catName(){
    return this.registrationForm.get("catName");
  }
  
  get brandName(){
    return this.registrationForm.get("brandName");
  }
  
  get tag(){
    return this.registrationForm.get("tag");
  }
  
  get cost(){
    return this.registrationForm.get("cost");
  }
  
  get price(){
    return this.registrationForm.get("price");
  }

  get discount(){
    return this.registrationForm.get("discount");
  }

  registrationForm = this.formbuilder.group({

    name:['',[Validators.required,Validators.maxLength(100)]],
    catName:['',[Validators.required,Validators.maxLength(100)]],
    brandName : ['',[Validators.required,Validators.maxLength(100)]],
    tag: ['',[Validators.required,Validators.maxLength(100)]],
    cost:['',[Validators.required,Validators.maxLength(100)]],
    price:['',[Validators.required,Validators.maxLength(100)]],
    discount:['',[Validators.maxLength(100)]],
  })

  private collectInputData(){
    if(this.registrationForm.get("name").value != ""){
      this.item.name = this.registrationForm.get("name").value;
    }else{
     this.item.name = this.apiCalls.selectedItem.name;
    }

    if(this.registrationForm.get("catName").value != ""){
      this.item.catName = this.registrationForm.get("catName").value;
    }else{
      this.item.catName = this.apiCalls.selectedItem.catName;
     }

    if(this.registrationForm.get("brandName").value != ""){
      this.item.brandName = this.registrationForm.get("brandName").value;
    }else{
      this.item.brandName = this.apiCalls.selectedItem.brandName;
     }  

    if(this.registrationForm.get("tag").value != ""){
      this.item.tag = this.registrationForm.get("tag").value;
    }else{
      this.item.tag = this.apiCalls.selectedItem.tag;
     }

    if(this.registrationForm.get("cost").value != ""){
      this.item.cost = this.registrationForm.get("cost").value;
    }else{
      this.item.cost = this.apiCalls.selectedItem.cost;
     }

    if(this.registrationForm.get("price").value != ""){
      this.item.price = this.registrationForm.get("price").value;
    }else{
      this.item.price = this.apiCalls.selectedItem.price;
     }

     if(this.registrationForm.get("discount").value != ""){
      this.item.disValue = this.registrationForm.get("discount").value;
    }else{
      this.item.disValue = this.apiCalls.selectedItem.disValue;
     }
  }
  //#endregion

  constructor(
    private modalCtrl:ModalController,
    public apiCalls:ApiCallsService,
    public formbuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {
    this.barcodeValue = this.apiCalls.selectedItem.iId
  }

  async closeBTN(){
    await this.modalCtrl.dismiss();
  }

  updateBTN(){
    this.collectInputData()
    this.apiCalls.presentLoading("Please wait..");
    this.apiCalls.updateItem(this.item,this.apiCalls.selectedItem.iId)
      .subscribe(
        (response) => {            
          this.apiCalls.loadingController.dismiss()
          this.apiCalls.presentAlert("Item updated",true)  
          this.closeBTN()            
        },
        (error) => {          
          this.apiCalls.loadingController.dismiss()
          this.apiCalls.presentAlert("Error occured! Try again",true)                    
        })
  }

  deleteBTN(){
    this.apiCalls.presentLoading("Please wait..");
    this.apiCalls.deleteItem(this.apiCalls.selectedItem.iId)
      .subscribe(
        (response) => {          
          this.apiCalls.loadingController.dismiss()
          this.apiCalls.presentAlert("Item deleted",true) 
          this.closeBTN()   
        },
        (error) => {          
          this.apiCalls.loadingController.dismiss()
          this.apiCalls.presentAlert("Error occured! Try again",true)              
        })
  }

  printBarcodeBTN(){
    this.printBarcodeEvent()
  }

  async printBarcodeEvent(){
    const modal = await this.modalCtrl.create({
      component : BarcodePrinterComponent
    })
    await modal.present()
  }


}
