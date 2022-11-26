import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarproductoServicioComponent } from './editarproducto-servicio.component';

describe('EditarproductoServicioComponent', () => {
  let component: EditarproductoServicioComponent;
  let fixture: ComponentFixture<EditarproductoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarproductoServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarproductoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
