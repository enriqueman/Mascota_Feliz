import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { subscriber } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  fgValidator: FormGroup = this.fb.group({
    'usuario':['',[Validators.required, Validators.email]],
    'contrasena':['',[Validators.required]]
  });
  constructor(private fb:FormBuilder, 
    private servicioSeguridad: SeguridadService){
    

  }
  ngOnInit(): void{
    // this.fgValidator.controls["usuario"].setValue("Hola: ")
  }

  IdentificarUsuario(){
    let usuario = this.fgValidator.controls["usuario"].value;
    let contrasena= this.fgValidator.controls["contrasena"].value;
    //alert(usuario);
    let clavecifrada= cryptoJS.MD5(contrasena).toString();
    alert(clavecifrada);
    this.servicioSeguridad.Identificar(usuario,clavecifrada).subscribe((datos:any)=>
    {
      this.servicioSeguridad.AlmacenarSesion(datos);
      alert("correcto")
    },(error:any)=>{
      alert("Todo mal")

    });
    
    

      

  }
  
  

}
