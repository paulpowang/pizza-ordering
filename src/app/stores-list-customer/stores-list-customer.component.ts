import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '../models/store';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-stores-list-customer',
  templateUrl: './stores-list-customer.component.html',
  styleUrls: ['./stores-list-customer.component.css'],
})
export class StoresListCustomerComponent  implements OnInit {
  zipCode: string;
  zipcodeForm: FormControl = new FormControl('');
  selectedStore: object;
  errorMessage: string;
  stores: Observable<Store[]>;

  constructor(private router: Router,
              private storeService: StoreService
            ) {}

  ngOnInit() {
    this.zipCode = '';
    this.reloadData();
  }

  searchStores(zipCode: string): void {
    if (!zipCode)
    {
      this.reloadData();
      return;
    }
  
    this.stores =  this.storeService.getStoresByZipCode(zipCode);
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

  reloadData() {
    this.stores = this.storeService.getStoresList();
  }
}
