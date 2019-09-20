import { Component, OnInit } from '@angular/core';
 
import { Store } from '../models/store';
import { StoreService } from '../services/store.service';
 
@Component({
  selector: 'app-search-stores',
  templateUrl: './search-stores.component.html',
  styleUrls: ['./search-stores.component.css']
})
export class SearchStoresComponent implements OnInit {
 
  zipCode: string;
  stores: Store[];
 
  constructor(private dataService: StoreService) { }
 
  ngOnInit() {
    this.zipCode = "";
  }
 
  private searchStores() {
    this.stores = [];
    this.dataService.getStoresByZipCode(this.zipCode)
      .subscribe(stores => this.stores = stores);
  }
 
  onSubmit() {
    this.searchStores();
  }
}