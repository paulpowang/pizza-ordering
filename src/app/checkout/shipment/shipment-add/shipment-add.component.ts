import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shipment } from '../shipment';
import { ShipmentService } from '../shipment.service';

@Component({
  selector: 'app-shipment-add',
  templateUrl: './shipment-add.component.html',
  styleUrls: ['./shipment-add.component.css']
})
export class ShipmentAddComponent implements OnInit {

  shipment: Shipment = new Shipment();

  constructor(private service: ShipmentService,
              private router: Router) { }

  ngOnInit() {
  }

  save(){
    this.service.createShipment(this.shipment)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
      this.shipment = new Shipment();
  }

  onSubmit(){
    this.save();
    setTimeout(() => 
    {
      this.router.navigate(['/checkout']);
    },
    250);
  }

}
