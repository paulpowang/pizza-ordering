import { Component, OnInit } from '@angular/core';
 
import { Store } from '../store';
import { StoreService } from '../store.service';
 
@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.css']
})
export class UpdateStoreComponent implements OnInit {
 
  store: Store = new Store();
  submitted = false;
 
  constructor(private storeService: StoreService) { }
 
  ngOnInit() {
  }
 
  newStore(): void {
    this.submitted = false;
    this.store = new Store();
  }

  updateStore() {

    this.storeService.updateStore(this.store.storeId,
      { storeName: this.store.storeName, city: this.store.city, 
        state: this.store.state, zipCode: this.store.zipCode })
      .subscribe(
        data => {
          console.log(data);
          this.store = data as Store;
          this.submitted = true;
        },
        error => console.log(error));
        this.store= new Store();
  }

  onSubmit() {
    this.updateStore();
  }
 
 

}