import { TestBed, inject } from '@angular/core/testing';

import { LoginsService } from './logins.service';

describe('LoginsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginsService]
    });
  });

  it('should be created', inject([LoginsService], (service: LoginsService) => {
    expect(service).toBeTruthy();
  }));
});
