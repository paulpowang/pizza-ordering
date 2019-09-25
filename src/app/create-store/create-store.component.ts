import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '../models/store';
import { StoreService } from '../services/store.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

 
@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {
 
  store: Store = new Store();
  storeDetailsForm: FormGroup;
 
  constructor(
      private storeService: StoreService,
      private router: Router,
      private location: Location,
      private fb: FormBuilder
  ) { }
 
  ngOnInit() {
    this.createForms();
  }
 
  validation_messages = {
    'name': [
      { type: 'required', message: 'Store name is required' }
    ],
    'city': [
      { type: 'required', message: 'City is required' },
    ],
    'state': [
      { type: 'required', message: 'State is required' },
    ],
    'zipCode': [
      { type: 'required', message: 'Zip Code is required' },
      { type: 'pattern', message: 'Zip Code must consist of 5 numbers' },
    ]
  };

  createForms() {
    this.storeDetailsForm = this.fb.group({
      name: ['', Validators.required ],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode:  new FormControl ('', Validators.compose([
        Validators.required, 
        Validators.pattern('^[0-9]{5}')
      ]))
    })
  }

  save() 
  {
    this.store.setFields(this.storeDetailsForm.value);
    this.store.storeName = this.storeDetailsForm.value.name;

    this.storeService.createStore(this.store)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }
 
  onSubmit() {
    this.save();
    setTimeout(() => 
    {
      this.router.navigate(['/storesAdmin']);
    },
    400);
  }

  back() {
    this.location.back();
  }
}