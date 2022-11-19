import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacategoriaproductoComponent } from './listacategoriaproducto.component';

describe('ListacategoriaproductoComponent', () => {
  let component: ListacategoriaproductoComponent;
  let fixture: ComponentFixture<ListacategoriaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacategoriaproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListacategoriaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
