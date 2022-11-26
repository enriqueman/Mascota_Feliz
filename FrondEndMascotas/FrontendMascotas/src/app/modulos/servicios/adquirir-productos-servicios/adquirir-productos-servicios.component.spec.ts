import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdquirirProductosServiciosComponent } from './adquirir-productos-servicios.component';

describe('AdquirirProductosServiciosComponent', () => {
  let component: AdquirirProductosServiciosComponent;
  let fixture: ComponentFixture<AdquirirProductosServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdquirirProductosServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdquirirProductosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
