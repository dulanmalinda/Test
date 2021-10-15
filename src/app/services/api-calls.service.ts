import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingController,AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

//MODALS
export class item {
  name: string;
  catName: string;
  brandName: string;
  tag:string;
  price:string;
  cost:String;
  disValue:string;
}

export class user{
  username:string;
  password:string;
}
//END

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  itemEndpoint = 'https://gneefer-server-three.vercel.app/api/item/';
  stocksEndpoint = 'https://gneefer-server-three.vercel.app/api/stock/';
  branchesEndpoint = 'https://gneefer-server-three.vercel.app/api/branch/';
  loginEndpoint = 'https://gneefer-server-three.vercel.app/api/auth/signin';
  reportsEndpoint = 'https://gneefer-server-three.vercel.app/report/';
  invoiceEndpoint = 'https://gneefer-server-three.vercel.app/api/invoice/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //used in Items page
  selectedItem:any

  //used in Stocks page
  selectedStock:any

  //used in login page
  requirePane = false
  loggedInstat = false
  //End

  //used reports page
  selectedInvoice:any;

  constructor(
    private httpClient: HttpClient,
    public loadingController:LoadingController,
    public alertcontroller:AlertController,
    private router:Router,
    private location: Location
  ) { }

  //#region Generals
  async presentLoading(messageLoading) {
    const loading = await this.loadingController.create({
      message: messageLoading,
    });
    await loading.present();
  }

  async presentAlert(message:string,reload:boolean){
    const alert = await this.alertcontroller.create({
      message : message,
      buttons : [{
        text : 'Close',
        role: 'cancel',
        handler: () => {
          if(reload){
            this.decodeURL()
            window.location.reload()
          }
        }
      }]
    });

    await alert.present();
  }

  logOut(){
    this.presentLoading("Logging out")
    this.router.navigate(['/login'])
  }
  //#endregion


  //#region Items_Tab
  getItems(): Observable<any> {
    return this.httpClient.get(this.itemEndpoint)
  }

  createItem(item: item): Observable<any> {
    return this.httpClient.post<item>(this.itemEndpoint, JSON.stringify(item), this.httpOptions)
  }

  updateItem(item: item,itemIid): Observable<any> {
    return this.httpClient.put<item>(this.itemEndpoint + itemIid, JSON.stringify(item), this.httpOptions)
  }

  deleteItem(itemIid): Observable<any> {
    return this.httpClient.delete(this.itemEndpoint + itemIid)
  }
  //#endregion

  //#region Stocks_Tab
  getStocks(): Observable<any> {
    return this.httpClient.get(this.stocksEndpoint)
  }

  addStocks(itemId,_branchCode,_qty): Observable<any> {
    return this.httpClient.put(this.stocksEndpoint + "update/" + _branchCode + "/" + itemId + "/" + _qty, this.httpOptions)
  }

  transferStocks(sentbranchCode,receivedbranchCode,itemId,qty): Observable<any> {
    return this.httpClient.put(this.stocksEndpoint + "stocktransfer/" + sentbranchCode + "/"+ receivedbranchCode + "/" + itemId + "/" + qty, this.httpOptions)
  }

  deleteStocks(itemId,_branchCode,_qty): Observable<any> {
    return this.httpClient.put(this.stocksEndpoint + "update/" + _branchCode + "/" + itemId + "/" + _qty, this.httpOptions)
  }

  getBranches(): Observable<any> {
    return this.httpClient.get(this.branchesEndpoint)
  }
  //#endregion

  //#region user_login
  userLogin(creds:user): Observable<any> {
    return this.httpClient.post<user>(this.loginEndpoint, JSON.stringify(creds), this.httpOptions)
  }
  //#endregion

  //#region Reports_tab
  getRevenueByBranch(startDate,endDate): Observable<any> {
    return this.httpClient.get(this.reportsEndpoint + "revenue/branch/timerange/" + startDate + "/" + endDate)
  }

  getRevenueByBrand(startDate,endDate): Observable<any> {
    return this.httpClient.get(this.reportsEndpoint + "revenue/brand/timerange/" + startDate + "/" + endDate)
  }

  getSalesByBrand(startDate,endDate): Observable<any> {
    return this.httpClient.get(this.reportsEndpoint + "sales/brand/timerange/" + startDate + "/" + endDate)
  }

  getAllInvoices(): Observable<any> {
    return this.httpClient.get(this.invoiceEndpoint)
  }
  //#endregion

    //Url Encoder section
    encodeURL(){
      this.location.replaceState('/Gneefer_ERP');
    }
    decodeURL(){
      var currentLocation  = this.router.url;
      console.log(currentLocation)
      this.location.replaceState(currentLocation);
    }
    //end section

}
