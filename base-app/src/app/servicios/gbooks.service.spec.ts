import { TestBed, inject } from '@angular/core/testing';

import { GbooksService } from './gbooks.service';
import { HttpClientModule } from '@angular/common/http';

describe('GbooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GbooksService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([GbooksService], (service: GbooksService) => {
    expect(service).toBeTruthy();
  }));
});
