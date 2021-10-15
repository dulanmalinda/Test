import { Component } from '@angular/core';
import { ApiCallsService } from './services/api-calls.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Stocks', url: '/stocks', icon: 'cart' },
    { title: 'Items', url: '/items', icon: 'pricetags' },
    { title: 'Reports', url: '/invoices', icon: 'cash' },
    //{ title: 'Promotions', url: '/promotions', icon: 'ice-cream' },
  ];
  public labels = [];
  constructor(
    public apicalls :ApiCallsService
  ) {}
}