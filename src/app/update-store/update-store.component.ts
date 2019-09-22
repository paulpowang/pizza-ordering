import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { FoodItem } from '../models/food-item';
import { Store } from '../models/store';

import { StoreService } from '../services/store.service';
import { FoodItemsService } from '../services/food-items.service';

 
@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.css']
})
export class UpdateStoreComponent implements OnInit {
  @Input() store: Store;

  storeFoodItems: Array<FoodItem> = [];
  allFoodItems: Array<FoodItem> = [];
  submitted = false;
  deleted = false;
 
  constructor(
    private storeService: StoreService,
    private foodItemsService: FoodItemsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
 
  ngOnInit() {
    // Gets Id
    const id = +this.route.snapshot.paramMap.get('id');

    // Gets Store
    this.storeService.getStore(id).subscribe( store => this.store = store);

    // Gets food items in store
    this.foodItemsService.getFoodItemsByStoreId(id).subscribe((array: Array<any>) => {
      this.storeFoodItems = array.map(obj => new FoodItem(obj));
    });

    // Gets all food items 
    this.foodItemsService.getAllFoodItems().subscribe((array: Array<any>) => {
      this.allFoodItems = array.map(obj => new FoodItem(obj));
    });
  }

  updateStore() {

    this.storeService.updateStore(this.store.storeId,
      { storeName: this.store.storeName, city: this.store.city, 
        state: this.store.state, zipCode: this.store.zipCode, foodItems: this.storeFoodItems})
      .subscribe(
        data => {
          console.log(data);
          this.store = data as Store;
          this.submitted = true;
        },
        error => console.log(error));

    //Delay so that the changes made to the database can be updated before they are fetched by the site
    setTimeout(() => 
    {
      this.router.navigate(['/storesAdmin']);
    },
    250);
  }
  
  delete()
  {
    this.storeService.deleteStore(this.store.storeId)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log('ERROR: ' + error));

    //Delay so that the changes made to the database can be updated before they are fetched by the site
    setTimeout(() => 
    {
      this.router.navigate(['/storesAdmin']);
    },
    250);
  }
}