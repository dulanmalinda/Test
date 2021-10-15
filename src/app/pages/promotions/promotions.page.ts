import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.page.html',
  styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage implements OnInit {

  constructor(
    private apiCalls:ApiCallsService
  ) { }

  ngOnInit() {
    this.apiCalls.encodeURL()
  }

}
