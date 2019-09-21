import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresListAdminComponent } from './stores-list-admin.component';

describe('SearchStoresComponent', () => {
  let component: StoresListAdminComponent ;
  let fixture: ComponentFixture<StoresListAdminComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresListAdminComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresListAdminComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
