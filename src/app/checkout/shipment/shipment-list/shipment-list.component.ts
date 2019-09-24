import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Shipment } from '../shipment';
import { ShipmentService } from '../shipment.service';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.css']
})
export class ShipmentListComponent implements OnInit {

  shipments: Observable<Shipment[]>;
  

  constructor(private router: Router, private service: ShipmentService) { }

  ngOnInit() {
    this.shipments = this.service.getShipmentsList();
  }

  addShipment(){
    this.router.navigate(['/checkout/shipment/add']);
  }

  editShipment(id:number){
    this.router.navigate(['/checkout/shipment/edit/' + id]);
  }

}
