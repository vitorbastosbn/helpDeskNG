import { TestBed, inject } from '@angular/core/testing';

import { CompartilhadoService } from './compartilhado.service';

describe('CompartilhadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompartilhadoService]
    });
  });

  it('should be created', inject([CompartilhadoService], (service: CompartilhadoService) => {
    expect(service).toBeTruthy();
  }));
});
