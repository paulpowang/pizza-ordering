import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Creditcard } from '../creditcard';
import { CreditcardService } from '../creditcard.service';


@Component({
  selector: 'app-creditcard-list',
  templateUrl: './creditcard-list.component.html',
  styleUrls: ['./creditcard-list.component.css']
})
export class CreditcardListComponent implements OnInit {

  creditcards: Observable<Creditcard[]>;

  constructor(private creditcardService: CreditcardService) { }

  ngOnInit() {
    this.creditcards = this.creditcardService.getCreditcardsList();
  }

}
