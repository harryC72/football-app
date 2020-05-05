import { TestBed } from '@angular/core/testing';

import { UIStateServiceService } from './ui-state-service.service';

describe('UIStateServiceService', () => {
  let service: UIStateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIStateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
