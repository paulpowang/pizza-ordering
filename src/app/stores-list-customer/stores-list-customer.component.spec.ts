import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresListCustomerComponent } from './stores-list-customer.component';

describe('SearchStoresComponent', () => {
  let component: StoresListCustomerComponent;
  let fixture: ComponentFixture<StoresListCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresListCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
