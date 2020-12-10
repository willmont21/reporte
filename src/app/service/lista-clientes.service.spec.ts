import { TestBed } from '@angular/core/testing';

import { ListaClientesService } from './lista-clientes.service';

describe('ListaClientesService', () => {
  let service: ListaClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
