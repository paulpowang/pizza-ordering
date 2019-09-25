import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shipment } from '../shipment';
import { ShipmentService } from '../shipment.service';
import { Location } from '@angular/common';
import { OrderService } from 'src/app/services/order.service';
import { ShipmentDetail } from 'src/app/models/shipment-detail';

@Component({
  selector: 'app-shipment-add',
  templateUrl: './shipment-add.component.html',
  styleUrls: ['./shipment-add.component.css']
})
export class ShipmentAddComponent implements OnInit {

  shipment: ShipmentDetail = new ShipmentDetail();

  constructor(private service: ShipmentService,
              private router: Router,
              private location: Location,
              private orderService: OrderService
              ) { }

  ngOnInit() {
  }

  save(){
    this.orderService.addShipmentDetail(this.shipment);
    
    
    // this.service.createShipment(this.shipment)
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //     },
    //     error => console.log(error)
    //   );
    //   this.shipment = new Shipment();
  }

  onSubmit(){
    this.save();
    setTimeout(() => 
    {
      this.router.navigate(['/checkout']);
    },
    250);
  }

  back() {
    this.location.back();
  }

}
