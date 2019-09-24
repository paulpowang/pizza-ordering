import { Component, OnInit } from '@angular/core';
import { Creditcard } from '../creditcard';
import { CreditcardService } from '../creditcard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditcard-add',
  templateUrl: './creditcard-add.component.html',
  styleUrls: ['./creditcard-add.component.css']
})
export class CreditcardAddComponent implements OnInit {

  creditcard: Creditcard = new Creditcard();

  constructor(private service: CreditcardService, 
              private router: Router) { }

  ngOnInit() {
  }

  save(){
    this.service.createCreditcard(this.creditcard)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
      this.creditcard = new Creditcard();
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
