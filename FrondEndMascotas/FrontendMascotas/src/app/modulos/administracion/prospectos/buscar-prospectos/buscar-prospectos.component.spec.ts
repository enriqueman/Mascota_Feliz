import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProspectosComponent } from './buscar-prospectos.component';

describe('BuscarProspectosComponent', () => {
  let component: BuscarProspectosComponent;
  let fixture: ComponentFixture<BuscarProspectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProspectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
