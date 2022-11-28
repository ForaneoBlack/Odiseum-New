import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizarempresaComponent } from './categorizarempresa.component';

describe('CategorizarempresaComponent', () => {
  let component: CategorizarempresaComponent;
  let fixture: ComponentFixture<CategorizarempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorizarempresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorizarempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
