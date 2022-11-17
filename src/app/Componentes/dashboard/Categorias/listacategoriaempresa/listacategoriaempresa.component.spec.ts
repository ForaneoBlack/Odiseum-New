import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacategoriaempresaComponent } from './listacategoriaempresa.component';

describe('ListacategoriaempresaComponent', () => {
  let component: ListacategoriaempresaComponent;
  let fixture: ComponentFixture<ListacategoriaempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacategoriaempresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacategoriaempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
