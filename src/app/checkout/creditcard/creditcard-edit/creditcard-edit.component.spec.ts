import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardEditComponent } from './creditcard-edit.component';

describe('CreditcardEditComponent', () => {
  let component: CreditcardEditComponent;
  let fixture: ComponentFixture<CreditcardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditcardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
