import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'items',
    loadChildren: () => import('./pages/items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'purchases',
    loadChildren: () => import('./pages/purchases/purchases.module').then( m => m.PurchasesPageModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./pages/invoices/invoices.module').then( m => m.InvoicesPageModule)
  },
  {
    path: 'promotions',
    loadChildren: () => import('./pages/promotions/promotions.module').then( m => m.PromotionsPageModule)
  },
  {
    path: 'add-item-modal',
    loadChildren: () => import('./modalComponents/add-item-modal/add-item-modal.module').then( m => m.addItemModalComponentModule)
  },
  {
    path: 'stocks',
    loadChildren: () => import('./pages/stocks/stocks.module').then( m => m.StocksPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
