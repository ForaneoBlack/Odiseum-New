import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteproductosComponent } from './reporteproductos.component';

describe('ReporteproductosComponent', () => {
  let component: ReporteproductosComponent;
  let fixture: ComponentFixture<ReporteproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteproductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
