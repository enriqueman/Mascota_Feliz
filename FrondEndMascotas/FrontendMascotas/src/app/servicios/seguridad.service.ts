import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  Identificar(usuario: string, contrasena: string):Observable<ModeloIdentificar> 
  {
  return this.http.post<ModeloIdentificar>("http://localhost:3000/identificarUsuario",{
    usuario: usuario,
    contrasena: contrasena
  },{
    headers: new HttpHeaders({})
  })

  }

  AlmacenarSesion(datos: ModeloIdentificar){
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);

  }

  ObternerInformacionSesion(){
    let datosString =localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }

  }
  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
  }
}
