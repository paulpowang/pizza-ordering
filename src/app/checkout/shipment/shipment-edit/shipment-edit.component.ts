import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shipment } from '../shipment';
import { ShipmentService } from '../shipment.service';
import { Location } from '@angular/common';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-shipment-edit',
  templateUrl: './shipment-edit.component.html',
  styleUrls: ['./shipment-edit.component.css']
})
export class ShipmentEditComponent implements OnInit {

  @Input() shipment: Shipment;
  submitted = false;
  constructor(private orderService: OrderService, private router: Router, private route: ActivatedRoute,private service: ShipmentService,private location: Location) { }

  ngOnInit() {
    // Get Id
    const id = +this.route.snapshot.paramMap.get('id');
    // Get shipment
    this.service.getShipment(id)
      .subscribe(shipment => {
        this.shipment = shipment;
      });
  }


  updateShipment(){
    this.service.updateShipment(this.shipment.shippingId,{
      name: this.shipment.name,
      address: this.shipment.address,
      city: this.shipment.city,
      state: this.shipment.state,
      pin: this.shipment.pin,
      mobileNumber: this.shipment.mobileNumber,
      landline: this.shipment.landline,
      orderStatus: this.shipment.orderStatus
    }).subscribe(
      data =>{
        console.log(data);
        this.shipment = data as Shipment;
        this.submitted = true;
        this.orderService.fetchUserInfo(this.orderService.getUserId());

      },
      error => console.log(error)
    );

    setTimeout(() => 
    {

      this.router.navigate(['/checkout']);
    },
    250);
  }// end of updateShipment()

  delete(){
    this.service.deleteShipment(this.shipment.shippingId)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );

    setTimeout(() => 
    {
      this.router.navigate(['/checkout']);
    },
    250);
    }//end of delete()

    back() {
      this.location.back();
    }
}
