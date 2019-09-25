import {Component, Input, OnInit} from '@angular/core';
import { UsercredentialService } from '../usercredential.service';
import {FormControl, Validators} from '@angular/forms';
import {Ucerc} from '../userc';

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



  constructor(private userCredentialService: UsercredentialService) { }
  onClickMe() {
    this.userCredentialService.getUser(this.userCredentialId).subscribe(data => {
      console.log(data);
      this.contain = data;
      if (this.contain !== true) {
        this.saveuser();
      } else {
        alert('user id exist');
      }
    });
    // tslint:disable-next-line:triple-equals


  }
  saveuser() {
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
