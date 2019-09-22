import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateStoreComponent } from './create-store/create-store.component';
import { StoresListCustomerComponent } from './stores-list-customer/stores-list-customer.component';
import { StoresListAdminComponent } from './stores-list-admin/stores-list-admin.component';
import { UpdateStoreComponent } from './update-store/update-store.component';
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
  
  {
    path: 'storesAdmin',
    component: StoresListAdminComponent,
  },
  {
    path: 'storesAdmin/:id',
    component: UpdateStoreComponent,
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
