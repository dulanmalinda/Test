import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiCallsService, user } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public apicalls:ApiCallsService,
    private router:Router,
    private loadingCtrl:LoadingController,
    private route:ActivatedRoute
  ) { 
    route.params.subscribe(val => {
      if(apicalls.requirePane){
        apicalls.requirePane = false;
        window.location.reload()
      }
    });
  }

  loginCreds : user = {
    username : "",
    password : ""
  }

  ngOnInit() {
    this.apicalls.encodeURL()
  }

  loginBTN(){
    this.apicalls.presentLoading("Please wait...")
    this.apicalls.userLogin(this.loginCreds)
    .subscribe(
      (response) => {    
        this.loadingCtrl.dismiss();     
        this.loginCreds.username = ""
        this.loginCreds.password = ""    
        this.apicalls.requirePane = true 
        this.apicalls.loggedInstat = true         
        this.router.navigate(['/stocks'])
      },
      (error) => {    
        this.loadingCtrl.dismiss();                         
        this.apicalls.presentAlert("Failed Login.Retry",true)
      })
  }

}
