import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddItemModalComponent} from 'src/app/modalComponents/add-item-modal/add-item-modal.component';
import { SelectedItemModalComponent } from 'src/app/modalComponents/selected-item-modal/selected-item-modal.component';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  filterTerm:string;
  returnedItems = [];

  constructor(
    public apicalls :ApiCallsService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.apicalls.requirePane = true
    this.getItems();

    this.apicalls.encodeURL();
  }

  getItems(){
    this.apicalls.getItems()
      .subscribe(
        (response) => {                           
          this.returnedItems = response
        },
        (error) => {                            
          console.error('Request failed with error')
        })
  }

  async addItemBtn(){
    const modal = await this.modalCtrl.create({
      component : AddItemModalComponent
    })
    await modal.present()
  }

  async selectedItemEvent(){
    const modal = await this.modalCtrl.create({
      component : SelectedItemModalComponent
    })
    await modal.present()
  }

  selectItem(event : any){
    this.apicalls.selectedItem = event;
    this.selectedItemEvent()
  }

}
