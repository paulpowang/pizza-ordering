import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
  loginDetailsForm: FormGroup;

  loginSuccess: boolean;
  loginAttempted: boolean;

  requiredError = 'Password is required';

  invalidUserPassError = 'Invalid Email or Password';

  // tslint:disable-next-line:no-shadowed-variable
  constructor(
    private LoginService: LoginService,
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForms();
    this.loginSuccess = false;
    this.loginAttempted = false;
  }

  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Email must be valid' },
    ],
    password: [{ type: 'required', message: 'Password is required' }],
  };

  createForms() {
    this.loginDetailsForm = this.fb.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.loginAttempted = true;
    this.email = this.loginDetailsForm.value.email;
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
    this.loginSuccess = true;
    if (this.login.userType === 'customer') {
      this.router.navigate(['/storesCustomer']);
    } else {
      this.router.navigate(['/storesAdmin']);
    }
  }

  createAccount() {
    this.router.navigate(['/signup']);
  }

  passwordEmpty() {
    if (this.password === '') {
      return true;
    }
    return false;
  }
}
