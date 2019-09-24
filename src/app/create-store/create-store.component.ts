import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '../models/store';
import { StoreService } from '../services/store.service';
 
@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {
 
  store: Store = new Store();
 
  constructor(
      private storeService: StoreService,
      private router: Router,
      private location: Location
  ) { }
 
  ngOnInit() {
  }
 
  save() {
    this.storeService.createStore(this.store)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }
 
  onSubmit() {
    this.save();
    setTimeout(() => 
    {
      this.router.navigate(['/storesAdmin']);
    },
    400);
  }

  back() {
    this.location.back();
  }
}