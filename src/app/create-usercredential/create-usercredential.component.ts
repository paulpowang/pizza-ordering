import {Component, Input, OnInit} from '@angular/core';
import { UsercredentialService } from '../usercredential.service';
import {Ucerc} from '../userc';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import {AlertComponent} from '../alert/alert.component';

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
              private router: Router, private alertService: AlertService,
              private alert: AlertComponent) { }
  onClickMe() {
    this.userCredentialService.getUser(this.userCredentialId).subscribe(data => {
      console.log(data);
      this.contain = data;
      if (this.contain !== true && this.email && this.password) {
        this.saveuser();
        this.alert.success('sucess');
        this.router.navigate(['/login']);
      } else if (this.password && this.email) {
        this.alert.fail('email already exists');
      } else if (this.email) {
        this.alert.fail('user email or password missing');
      } else {
        this.alert.fail('email required');
      }
    });
    // this.router.navigate(['/login']);
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
