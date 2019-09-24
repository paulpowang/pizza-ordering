import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardAddComponent } from './creditcard-add.component';

describe('CreditcardAddComponent', () => {
  let component: CreditcardAddComponent;
  let fixture: ComponentFixture<CreditcardAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditcardAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
