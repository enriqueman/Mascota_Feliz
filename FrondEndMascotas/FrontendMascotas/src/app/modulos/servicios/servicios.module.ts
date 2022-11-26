import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { SolicitarAfiliacionComponent } from './solicitar-afiliacion/solicitar-afiliacion.component';
import { AdquirirProductosServiciosComponent } from './adquirir-productos-servicios/adquirir-productos-servicios.component';


@NgModule({
  declarations: [
    SolicitarAfiliacionComponent,
    AdquirirProductosServiciosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
