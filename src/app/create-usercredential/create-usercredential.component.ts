import {Component, Input, OnInit} from '@angular/core';
import { UsercredentialService } from '../usercredential.service';
import {Ucerc} from '../userc';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-usercredential',
  templateUrl: './create-usercredential.component.html',
  styleUrls: ['./create-usercredential.component.css']
})
export class CreateUsercredentialComponent implements OnInit {

  people: Array<any>;
  temp: Array<any>;
  @Input() userCredentialId: string;
  @Input() password: string;
  @Input() code: string;
  message: string;
  contain: boolean;
  date: Date;
  newuser: Ucerc = new Ucerc();
  tempuser: Ucerc = new Ucerc();
  email = new FormControl('', [Validators.required, Validators.email]);



  constructor(private userCredentialService: UsercredentialService,
              private router: Router) { }
  onClickMe() {
    this.userCredentialService.getUser(this.userCredentialId).subscribe(data => {
      console.log(data);
      this.contain = data;
      if (this.contain !== true) {
        this.printalert();
      } else {
        alert('user id exist');
      }
    });
    this.router.navigate(['/login']);
    // tslint:disable-next-line:triple-equals


  }
  printalert() {
    this.newuser.userCredentialId = this.userCredentialId;
    this.newuser.password = this.password;
    this.newuser.userType = 'customer';
    const t = 1024;
    if (this.code === '1024') {
      this.newuser.userType = 'admin';
    }
    this.userCredentialService.createUser(this.newuser).subscribe(data2 => {
        console.log(data2);
      },
      error => console.log(error));
    this.newuser = new Ucerc();
    this.contain = true;
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  ngOnInit() {
    this.userCredentialService.getAll().subscribe(data => {
      this.people = data;
    });
  }
}