import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoresListComponent } from './stores-list/stores-list.component';
import { SearchStoresComponent } from './search-stores/search-stores.component';
import { UpdateStoreComponent } from './update-store/update-store.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CreateStoreComponent,
    StoreDetailsComponent,
    StoresListComponent,
    SearchStoresComponent,
    UpdateStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }