import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { CrearproductoServicioComponent } from './productosServicios/crearproducto-servicio/crearproducto-servicio.component';
import { BuscarproductoServicioComponent } from './productosServicios/buscarproducto-servicio/buscarproducto-servicio.component';
import { EditarproductoServicioComponent } from './productosServicios/editarproducto-servicio/editarproducto-servicio.component';
import { EliminarproductoServicioComponent } from './productosServicios/eliminarproducto-servicio/eliminarproducto-servicio.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    BuscarMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    CrearMascotaComponent,
    CrearSucursalComponent,
    EditarSucursalComponent,
    BuscarSucursalComponent,
    EliminarSucursalComponent,
    EliminarPlanComponent,
    EditarPlanComponent,
    BuscarPlanComponent,
    CrearPlanComponent,
    CrearproductoServicioComponent,
    BuscarproductoServicioComponent,
    EditarproductoServicioComponent,
    EliminarproductoServicioComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
