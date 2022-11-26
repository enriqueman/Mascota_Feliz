import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearproductoServicioComponent } from './crearproducto-servicio.component';

describe('CrearproductoServicioComponent', () => {
  let component: CrearproductoServicioComponent;
  let fixture: ComponentFixture<CrearproductoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearproductoServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearproductoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
