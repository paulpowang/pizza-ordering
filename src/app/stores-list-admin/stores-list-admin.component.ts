import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '../models/store';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-stores-list-admin',
  templateUrl: './stores-list-admin.component.html',
  styleUrls: ['./stores-list-admin.component.css'],
})
export class StoresListAdminComponent  implements OnInit {

  zipCode: string;
  stores: Observable<Store[]>;

  constructor(private router: Router,
              private storeService: StoreService) {}

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

  reloadData() {
    this.stores = this.storeService.getStoresList();
  }

  createStore()
  {
    this.router.navigate(['/storesAdmin/createStore']);
  }
}
