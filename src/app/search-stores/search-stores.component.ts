import { Component, OnInit } from '@angular/core';
 
import { Store } from '../store';
import { StoreService } from '../store.service';
 
@Component({
  selector: 'app-search-stores',
  templateUrl: './search-stores.component.html',
  styleUrls: ['./search-stores.component.css']
})
export class SearchStoresComponent implements OnInit {
 
  postalCode: string;
  stores: Store[];
 
  constructor(private dataService: StoreService) { }
 
  ngOnInit() {
    this.postalCode = "";
  }
 
  private searchStores() {
    this.stores = [];
    this.dataService.getStoresByPostalCode(this.postalCode)
      .subscribe(stores => this.stores = stores);
  }
 
  onSubmit() {
    this.searchStores();
  }
}