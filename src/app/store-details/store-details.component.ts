import { Component, OnInit, Input } from '@angular/core';
 
import { StoreService } from '../services/store.service';
import { Store } from '../models/store';
import { StoresListCustomerComponent } from '../stores-list-customer/stores-list-customer.component';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
 
  @Input() store: Store;
 
  constructor(private storeService: StoreService, private listComponent: StoresListCustomerComponent) { }
 
  ngOnInit() {
  }
 
    updateStore(isActive: boolean) {
    this.storeService.updateStore(this.store.storeId,
      { storeName: this.store.storeName, city: this.store.city, state: this.store.state, zipCode: this.store.zipCode })
      .subscribe(
        data => {
          console.log(data);
          this.store = data as Store;
        },
        error => console.log(error));
  }
 
  deleteStore() {
    this.storeService.deleteStore(this.store.storeId)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}