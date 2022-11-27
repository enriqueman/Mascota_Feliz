import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdquirirProductosServiciosComponent } from './adquirir-productos-servicios/adquirir-productos-servicios.component';
import { SolicitarAfiliacionComponent } from './solicitar-afiliacion/solicitar-afiliacion.component';

const routes: Routes = [
  {
    path:"adquirir-productos-servicios",
    component:AdquirirProductosServiciosComponent

  },
  {
    path:"solicitar-afiliacion",
    component:SolicitarAfiliacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
