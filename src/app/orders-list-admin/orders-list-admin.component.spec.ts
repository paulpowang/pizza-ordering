import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListAdminComponent } from './orders-list-admin.component';

describe('OrdersListAdminComponent', () => {
  let component: OrdersListAdminComponent;
  let fixture: ComponentFixture<OrdersListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
