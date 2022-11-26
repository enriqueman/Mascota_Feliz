import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarproductoServicioComponent } from './buscarproducto-servicio.component';

describe('BuscarproductoServicioComponent', () => {
  let component: BuscarproductoServicioComponent;
  let fixture: ComponentFixture<BuscarproductoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarproductoServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarproductoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
