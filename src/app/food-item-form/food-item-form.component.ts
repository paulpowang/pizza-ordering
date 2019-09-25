import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FoodItemsService } from '../services/food-items.service';
import { FoodItem } from '../models/food-item';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from '../services/order.service';
import { ShoppingCartItem } from '../models/shopping-cart-item';

@Component({
  selector: 'app-food-item-form',
  templateUrl: './food-item-form.component.html',
  styleUrls: ['./food-item-form.component.css'],
})
export class FoodItemFormComponent implements OnInit {
  @Input('storeId') storeId: number;
  allFoodItems: Array<FoodItem> = [];
  shoppingCartItems: Array<FoodItem> = [];
  quantity: Array<number>;
  cartSnackBar: MatSnackBar;
  @Output() shoppingCartEmitter = new EventEmitter<Array<FoodItem>>();

  constructor(
    private foodItemsService: FoodItemsService,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    //populate FoodItems on Page
    this.foodItemsService.getFoodItemsByStoreId(id).subscribe((array: Array<any>) => {
      this.allFoodItems = array.map(obj => new FoodItem(obj));
      this.quantity = new Array(this.allFoodItems.length).fill(0);
    });
  }

  //Adds to Cart
  addToCart(foodItem: FoodItem) {
    this.shoppingCartItems.push(foodItem);
    // let cartSnackBar = MatSnackBar.toString();
  }

  submitShoppingCart(): void {
    this.orderService.setShoppingCartItems(
      this.shoppingCartItems
        .map((foodItem: FoodItem, index) => {
          this.router.navigate(['/checkout']);
          return new ShoppingCartItem(foodItem, this.quantity[index]);
        })
        .filter((shoppingCartItem: ShoppingCartItem) => shoppingCartItem.quantity > 0)
    );
    this.router.navigate(['/checkout']);
    this.shoppingCartEmitter.emit(this.shoppingCartItems);
  }

  increaseQtny(index: number) {
    this.quantity[index] = this.quantity[index] + 1;
  }

  decreaseQtny(index: number) {
    if (this.quantity[index] <= 0) {
      this.quantity[index] = this.quantity[index];
    } else {
      this.quantity[index] = this.quantity[index] - 1;
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
