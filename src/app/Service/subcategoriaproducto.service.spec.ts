import { TestBed } from '@angular/core/testing';

import { SubcategoriaproductoService } from './subcategoriaproducto.service';

describe('SubcategoriaproductoService', () => {
  let service: SubcategoriaproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcategoriaproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
