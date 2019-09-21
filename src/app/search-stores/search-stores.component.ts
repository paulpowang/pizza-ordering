import { Component, OnInit } from '@angular/core';

import { Store } from '../models/store';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-search-stores',
  templateUrl: './search-stores.component.html',
  styleUrls: ['./search-stores.component.css'],
})
export class SearchStoresComponent implements OnInit {
  zipCode: string;
  stores: Store[];

  constructor(private dataService: StoreService) {}

  ngOnInit() {
    this.zipCode = '';
    this.stores = [];
  }

  searchStores(zipCode: string) {
    this.stores = [];
    this.dataService.getStoresByZipCode(zipCode).subscribe({
      next: stores => (this.stores = stores || []),
    });
  }
}
