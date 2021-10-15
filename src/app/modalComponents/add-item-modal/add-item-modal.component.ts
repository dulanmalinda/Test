import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiCallsService, item } from 'src/app/services/api-calls.service';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss'],
})
export class AddItemModalComponent implements OnInit {

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
    this.item.name = this.registrationForm.get("name").value;
    this.item.catName = this.registrationForm.get("catName").value;
    this.item.brandName = this.registrationForm.get("brandName").value;
    this.item.tag = this.registrationForm.get("tag").value;
    this.item.cost = this.registrationForm.get("cost").value;
    this.item.price = this.registrationForm.get("price").value;
    this.item.disValue = "0";//this.registrationForm.get("discount").value;
  }
  //#endregion

  constructor(
    private modalCtrl:ModalController,
    public apiCalls:ApiCallsService,
    public formbuilder:FormBuilder
  ) { }

  ngOnInit() {}

  submitBTN(){
    this.collectInputData()
    this.apiCalls.presentLoading("Please wait..");
    this.apiCalls.createItem(this.item)
      .subscribe(
        (response) => {            
          this.apiCalls.presentAlert("Item added",true)               
          this.apiCalls.loadingController.dismiss()
          this.closeBTN()
        },
        (error) => {          
          this.apiCalls.presentAlert("Error occured! Try again",true)                    
          this.apiCalls.loadingController.dismiss()
        })
  }

  async closeBTN(){
    await this.modalCtrl.dismiss();
  }

}
