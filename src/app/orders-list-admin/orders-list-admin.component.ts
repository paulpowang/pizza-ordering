import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ShoppingCart } from '../models/shopping-cart';
import { CreditCardDetail } from '../models/credit-card-detail';
import { ShipmentDetail } from '../models/shipment-detail';

interface Order {
  orderId: number;
  shoppingCart: ShoppingCart;
  creditCardDetail: CreditCardDetail;
  shipmentDetail: ShipmentDetail;
}

@Component({
  selector: 'app-orders-list-admin',
  templateUrl: './orders-list-admin.component.html',
  styleUrls: ['./orders-list-admin.component.css'],
})
export class OrdersListAdminComponent implements OnInit {
  readonly tableColumns: string[] = [
    'orderId',
    'creditCard',
    'shipmentDetail',
    'shoppingCart',
    'total',
  ];
  orders: Array<Order> = [];
  expandedElement: Order | null;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getAllOrders().subscribe((orders: Array<Order>) => {
      this.orders = orders;
      console.log(orders);
    });
  }

  getTotalPrice(shoppingCart: any) {
    return shoppingCart.shoppingCartItems.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.foodItem.price;
    }, 0);
  }
}
