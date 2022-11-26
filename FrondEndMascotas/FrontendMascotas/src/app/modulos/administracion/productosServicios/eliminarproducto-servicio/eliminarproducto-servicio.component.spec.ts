import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarproductoServicioComponent } from './eliminarproducto-servicio.component';

describe('EliminarproductoServicioComponent', () => {
  let component: EliminarproductoServicioComponent;
  let fixture: ComponentFixture<EliminarproductoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarproductoServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarproductoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
