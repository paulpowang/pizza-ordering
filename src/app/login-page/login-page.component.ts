import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;
  @Input() password2: string;
  @Input() login: Login;
  error = false;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(
    private LoginService: LoginService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.password2 = this.password;
    this.password = '';
    this.LoginService.login(this.email).subscribe(login => {
      this.login = login;
      console.log(this.login);

      if (this.login.password === this.password2) {
        this.orderService.fetchUserInfo(this.email);
        this.success();
      } else {
        this.error = true;
      }
    });
  }

  success() {
    if (this.login.userType === 'customer') {
      this.router.navigate(['/storesCustomer']);
    } else {
      this.router.navigate(['/storesAdmin']);
    }
  }

  createAccount() {
    this.router.navigate(['/signup']);
  }
}
