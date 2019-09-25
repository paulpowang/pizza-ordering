import { TestBed } from '@angular/core/testing';

import { FoodQuantityService } from './food-quantity.service';

describe('FoodQuantityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodQuantityService = TestBed.get(FoodQuantityService);
    expect(service).toBeTruthy();
  });
});
