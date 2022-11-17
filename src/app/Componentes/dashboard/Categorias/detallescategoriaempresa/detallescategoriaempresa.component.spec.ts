import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallescategoriaempresaComponent } from './detallescategoriaempresa.component';

describe('DetallescategoriaempresaComponent', () => {
  let component: DetallescategoriaempresaComponent;
  let fixture: ComponentFixture<DetallescategoriaempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallescategoriaempresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallescategoriaempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
