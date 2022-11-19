import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallescategoriaproductoComponent } from './detallescategoriaproducto.component';

describe('DetallescategoriaproductoComponent', () => {
  let component: DetallescategoriaproductoComponent;
  let fixture: ComponentFixture<DetallescategoriaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallescategoriaproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallescategoriaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
