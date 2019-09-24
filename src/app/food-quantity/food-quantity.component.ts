import { Component, OnInit, Input } from '@angular/core';
import { FoodQuantityService } from '../services/food-quantity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-quantity',
  templateUrl: './food-quantity.component.html',
  styleUrls: ['./food-quantity.component.css']
})
export class FoodQuantityComponent implements OnInit {
  @Input('foodName') foodName: Array<FoodItem>;

  constructor() { }

  

  ngOnInit() {
  }

}

//STOPPED HERE ---
//Data for Store Popup

// import {Component} from '@angular/core';

// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'ngbd-modal-basic',
//   templateUrl: './modal-basic.html'
// })
// export class NgbdModalBasic {
//   closeResult: string;

//   constructor(private modalService: NgbModal) {}

//   open(content) {
//     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }

//   private getDismissReason(reason: any): string { 
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return  `with: ${reason}`;
//     }
//   }
// }
