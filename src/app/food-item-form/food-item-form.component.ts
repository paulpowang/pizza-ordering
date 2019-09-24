import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FoodItemsService } from '../services/food-items.service';
import { FoodItem } from '../models/food-item';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-food-item-form',
  templateUrl: './food-item-form.component.html',
  styleUrls: ['./food-item-form.component.css'],
})

export class FoodItemFormComponent implements OnInit {
  @Input('storeId') storeId: number;
  allFoodItems: Array<FoodItem> = [];
  shoppingCartItems: Array<FoodItem> = [];
  @Output() shoppingCartEmitter = new EventEmitter<Array<FoodItem>>();

  constructor(
      private foodItemsService: FoodItemsService,
      private route: ActivatedRoute,
      private router: Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
      //populate FoodItems on Page
      this.foodItemsService.getFoodItemsByStoreId(id).subscribe((array: Array<any>) => {
      this.allFoodItems = array.map(obj => new FoodItem(obj));
    });
};

  //Adds to Cart
  addToCart(foodItem: FoodItem) {
    this.shoppingCartItems.push(foodItem);
  }

  submitShoppingCart(): void {
    this.shoppingCartEmitter.emit(this.shoppingCartItems);
  }

  //create initial quantity array with 0 as values
  private shoppingCartItems: Array<ShoppingCartItem> = [];
  for(var i = 0; i < this.allFoodItems.length; i++){
    quantity[i] = 0;
    console.log(quantity[i]);
  }

  increaseQtny(index) {
    this.quantityArr[index] = this.quantity + 1;
  }

  decreaseQtny(index) {
  if(this.quantity[index] <= 1) {
    this.quantity[index] = this.quantity;
  }
  else {
    this.quantity = this.quantity - 1;
  }
}
}
  

//-----------------STOPPED HERE--------------------//
  //Used to Create Pop-Up Window

  // export interface DialogData {
  //   animal: string;
  //   name: string;
  // }

  // @Component({
  // selector: 'app-food-item-form',
  // templateUrl: './food-item-form.component.html',
  // styleUrls: ['./food-item-form.component.css'],
  // })

  // export class DialogOverviewExample {

  //   animal: string;
  //   name: string;
  
  //   constructor(public dialog: MatDialog) {}
  
  //   openDialog(): void {
  //     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //       width: '250px',
  //       data: {name: this.name, animal: this.animal}
  //     });
  
  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed');
  //       this.animal = result;
  //     });
  //   }
  // } 
