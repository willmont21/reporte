import { TestBed } from '@angular/core/testing';

import { CargaDatosService } from './carga-datos.service';

describe('CargaDatosService', () => {
  let service: CargaDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
