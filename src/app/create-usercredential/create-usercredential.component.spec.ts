import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsercredentialComponent } from './create-usercredential.component';

describe('CreateUsercredentialComponent', () => {
  let component: CreateUsercredentialComponent;
  let fixture: ComponentFixture<CreateUsercredentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUsercredentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUsercredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
