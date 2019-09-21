import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

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
  zipcodeForm: FormControl = new FormControl('');
  selectedStore: object;
  errorMessage: string;

  constructor(private dataService: StoreService, private router: Router) {}

  ngOnInit() {
    this.zipCode = '';
    this.stores = [];
  }

  searchStores(zipCode: string): void {
    if (!zipCode) return;
    this.stores = [];
    this.dataService.getStoresByZipCode(zipCode).subscribe({
      next: (arrayOfData: Array<object>) => {
        if (arrayOfData) {
          this.stores = arrayOfData.map((obj: any) => {
            let store = new Store();
            store.setFields(obj);
            return store;
          });
        }
        console.log(this.stores);
      },
    });
  }

  submit(formData: any) {
    console.log(formData);
  }

  validateStoreSelection(selectedStore: Store): boolean {
    if (!selectedStore) {
      this.errorMessage = 'Please select a store';
      return false;
    }
    return true;
  }
}
