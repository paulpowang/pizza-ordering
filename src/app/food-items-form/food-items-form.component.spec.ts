import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemsFormComponent } from './food-items-form.component';

describe('FoodItemsFormComponent', () => {
  let component: FoodItemsFormComponent;
  let fixture: ComponentFixture<FoodItemsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodItemsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
