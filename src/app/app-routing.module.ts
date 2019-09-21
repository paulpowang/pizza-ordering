import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateStoreComponent } from './create-store/create-store.component';
import { StoresListCustomerComponent } from './stores-list-customer/stores-list-customer.component';
import { UpdateStoreComponent } from './update-store/update-store.component';
import { StoresPageComponent } from './stores-page/stores-page.component';
import { FoodItemFormComponent } from './food-item-form/food-item-form.component';

const routes: Routes = [
  {
    path: 'storesCustomer',
    component: StoresListCustomerComponent,

  },
  {
    path: 'storesCustomer/:id',
    component: FoodItemFormComponent,
  },

  /*
  {
    path: '**',
    redirectTo: 'storesCustomer',
  },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
