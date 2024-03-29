import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateStoreComponent } from './create-store/create-store.component';
import { StoresListCustomerComponent } from './stores-list-customer/stores-list-customer.component';
import { StoresListAdminComponent } from './stores-list-admin/stores-list-admin.component';
import { UpdateStoreComponent } from './update-store/update-store.component';
import { FoodItemFormComponent } from './food-item-form/food-item-form.component';
import { CheckoutViewComponent } from './checkout/checkout-view/checkout-view.component';
import { CreditcardListComponent } from './checkout/creditcard/creditcard-list/creditcard-list.component';
import { CreditcardAddComponent } from './checkout/creditcard/creditcard-add/creditcard-add.component';
import { CreditcardEditComponent } from './checkout/creditcard/creditcard-edit/creditcard-edit.component';
import { ShipmentListComponent } from './checkout/shipment/shipment-list/shipment-list.component';
import { ShipmentAddComponent } from './checkout/shipment/shipment-add/shipment-add.component';
import { ShipmentEditComponent } from './checkout/shipment/shipment-edit/shipment-edit.component';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { ThankyouPageComponent } from './thankyou-page/thankyou-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateUsercredentialComponent } from './create-usercredential/create-usercredential.component';

const routes: Routes = [
  {path: 'login',
   component: LoginPageComponent,},
  {path: 'storesCustomer',
   component: StoresListCustomerComponent,},
  {path: 'storesCustomer/:id',
   component: FoodItemFormComponent,},
  {path: 'storesAdmin',
   component: StoresListAdminComponent,},
  {path: 'storesAdmin/createStore',
   component: CreateStoreComponent,},
  {path: 'storesAdmin/:id',
   component: UpdateStoreComponent,},  

  {path: 'shoppingcart',
   component: ShoppingCartComponent},

  {path: 'checkout',
   component: CheckoutViewComponent},
  {path: 'checkout/creditcard/add', component: CreditcardAddComponent},
    {path: 'checkout/creditcard/edit/:id', component: CreditcardEditComponent},
    {path: 'checkout/shipment/add', component: ShipmentAddComponent},
    {path: 'checkout/shipment/edit/:id', component: ShipmentEditComponent},  
  {path: 'summary',
   component: SummaryViewComponent},  
  {path: 'thankyou',
   component: ThankyouPageComponent},  
  {path: 'signup',

   component: CreateUsercredentialComponent},

  {path: '**',
   redirectTo: 'login',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
