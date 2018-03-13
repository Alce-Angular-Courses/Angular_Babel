import { TestBed, inject } from '@angular/core/testing';

import { ContactosService } from './contactos.service';
import { HttpClientModule } from '@angular/common/http';

describe('ContactosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactosService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ContactosService], (service: ContactosService) => {
    expect(service).toBeTruthy();
  }));
});
