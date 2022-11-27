import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { BuscarproductoServicioComponent } from './productosServicios/buscarproducto-servicio/buscarproducto-servicio.component';
import { CrearproductoServicioComponent } from './productosServicios/crearproducto-servicio/crearproducto-servicio.component';
import { EditarproductoServicioComponent } from './productosServicios/editarproducto-servicio/editarproducto-servicio.component';
import { EliminarproductoServicioComponent } from './productosServicios/eliminarproducto-servicio/eliminarproducto-servicio.component';
import { BuscarProspectosComponent } from './prospectos/buscar-prospectos/buscar-prospectos.component';
import { CrearProspectosComponent } from './prospectos/crear-prospectos/crear-prospectos.component';
import { EditarProspectosComponent } from './prospectos/editar-prospectos/editar-prospectos.component';
import { EliminarProspectosComponent } from './prospectos/eliminar-prospectos/eliminar-prospectos.component';
import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: "buscar-mascota",
    component: BuscarMascotaComponent
    
  },
  {
    path: "crear-mascota",
    component: CrearMascotaComponent

  },
  {
    path:"editar-mascota",
    component: EditarMascotaComponent
  },
  {
    path:"eliminar-mascota",
    component: EliminarMascotaComponent

  },
  {
    path:"buscar-plan",
    component:BuscarPlanComponent
  },
  {
    path:"crear-plan",
    component:CrearPlanComponent
  },
  {
    path:"editar-plan",
    component:EditarPlanComponent
  },
  {
    path:"eliminar-plan",
    component:EliminarPlanComponent
  },
  {
    path:"bucarproducto-servicio",
    component:BuscarproductoServicioComponent


  },
  {
    path:"crearproducto-servicio",
    component:CrearproductoServicioComponent
  },
  {
    path:"editarproducto-servicio",
    component:EditarproductoServicioComponent
  },
  {
    path:"eliminarproducto-servicio",
    component:EliminarproductoServicioComponent
  },
  {
    path:"buscar-prospecto",
    component:BuscarProspectosComponent

  },
  {
    path:"crear-prospecto",
    component:CrearProspectosComponent
  },
  {
    path:"editar-prospecto",
    component: EditarProspectosComponent
  },
  {
    path:"eliminar-prospecto",
    component: EliminarProspectosComponent
  },
  {
    path: "buscar-sucursal",
    component:BuscarSucursalComponent
  },
  {
    path: "crear-sucursal",
    component: CrearSucursalComponent
  },
  {
    path: "editar-sucursal",
    component: EditarSucursalComponent
  },
  {
    path: "eliminar-sucursal",
    component:EliminarSucursalComponent
  },
  {
    path:"buscar-usuario",
    component:BuscarUsuarioComponent
  },
  {
    path:"crear-usuario",
    component:CrearUsuarioComponent
  },
  {
    path:"editar-usuario",
    component:EditarUsuarioComponent
  },
  {
    path:"eliminar-usuario",
    component: EliminarUsuarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
