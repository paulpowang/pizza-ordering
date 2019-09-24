import { ShoppingCartService } from './../services/shopping-cart.service';
import { FoodItem } from './../models/food-item';
import { ShoppingCartItem } from './../models/shopping-cart-item';
import { FoodItemsService } from './../services/food-items.service';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items: ShoppingCart;
  item: ShoppingCartItem;
  @Input() foodItem: FoodItem
  @Input() quantity: number;

  constructor(
    private foodItemsService: FoodItemsService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.item = new ShoppingCartItem(this.quantity, this.foodItem);
    if(this.items.shoppingCartItems[this.foodItem.foodItemId])
      this.items.shoppingCartItems[this.foodItem.foodItemId].quantity = this.item.quantity;
    else
    this.items.shoppingCartItems[this.foodItem.foodItemId] = this.item;
  }


}