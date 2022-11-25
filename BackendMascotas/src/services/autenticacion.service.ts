import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Llaves } from '../config/llaves';
import { Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
const generador= require('password-generator');
const cryptoJS= require('crypto-js');
const jwt = require('jsonwebtoken');
@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */@repository(UsuarioRepository)/**
   * usuarioRepository: UsuarioRepository
   */
  public usuarioRepository: UsuarioRepository   
  ) {}

  /*
   * Add service methods here
   */

  GenerarClave(){
    let clave = generador(8,false);
    return clave;

  }

  CifrarClave(clave: string){
    let claveCifrada=cryptoJS.MD5(clave).toString();
    return claveCifrada;

  }

  IdentificarUsuario(usuario: string, contrasenas: string){
    try{
      let p = this.usuarioRepository.findOne({where:{correo: usuario, contrasena : contrasenas}});
      if(p){
        return p;
      }return false;
    }catch{
    return false;
  }
 }

 GenerarToken(usuario: Usuario){
    let token = jwt.sign({
      data: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre,

      }
      },Llaves.claveJWT);
      return token;
      
}

ValidarTokenJWT(token:string){
  try{
    let datos = jwt.verify(token,  Llaves.claveJWT);
   
   if(datos){ return datos;}
   return false;

  }catch{
    return false;
  }
}


}
