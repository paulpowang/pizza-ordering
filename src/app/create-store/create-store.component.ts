import { Component, OnInit } from '@angular/core';
 
import { Store } from '../models/store';
import { StoreService } from '../services/store.service';
 
@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {
 
  store: Store = new Store();
  submitted = false;
 
  constructor(private storeService: StoreService) { }
 
  ngOnInit() {
  }
 
  newStore(): void {
    this.submitted = false;
    this.store = new Store();
  }
 
  save() {
    this.storeService.createStore(this.store)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.store = new Store();
  }
 
  onSubmit() {
    this.save();
  }
}