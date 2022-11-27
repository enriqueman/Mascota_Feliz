import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const cryptoJS=require("cryptojs");

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
  constructor(private fb:FormBuilder){}
  ngOnInit(): void{
    // this.fgValidator.controls["usuario"].setValue("Hola: ")
  }

  IdentificarUsuario(){
    let usuario = this.fgValidator.controls["usuario"].value;
    let contrasena= this.fgValidator.controls["contrasena"].value;
    let clavecifrada= cryptoJS.MD5(contrasena);

  }
  
  

}
