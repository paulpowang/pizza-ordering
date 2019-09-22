import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoresListCustomerComponent } from './stores-list-customer/stores-list-customer.component';
import { StoresListAdminComponent } from './stores-list-admin/stores-list-admin.component';
import { FoodItemFormComponent } from './food-item-form/food-item-form.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { UpdateStoreComponent } from './update-store/update-store.component';

@NgModule({
  declarations: [
    AppComponent, 
    StoresListCustomerComponent, 
    StoresListAdminComponent, 
    FoodItemFormComponent,
    StoreDetailsComponent,
    UpdateStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
