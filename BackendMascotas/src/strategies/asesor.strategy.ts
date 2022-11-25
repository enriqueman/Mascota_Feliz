import { AuthenticationStrategy } from "@loopback/authentication/dist/types";
import {HttpErrors, RedirectRoute } from "@loopback/rest";
import { UserProfile } from "@loopback/security";
import { Request } from "express";
import { AutenticacionService } from '../services';
import { ParamsDictionary } from "express-serve-static-core";
import parseBearerToken from "parse-bearer-token";
import { ParsedQs } from "qs";
import { service } from "@loopback/core";

export class EstrategiaAsesor implements AuthenticationStrategy{
    name: string= 'asesor';
    constructor(
        @service(AutenticacionService)
       public servicioAutenticacion : AutenticacionService
     ) {}

     async authenticate(request: Request): Promise<UserProfile | undefined> {
        let token= parseBearerToken(request);
        if (token){
            let datos = this.servicioAutenticacion.ValidarTokenJWT(token);
            if (datos){
               let perfil : UserProfile = Object.assign({
                nombre: datos.data.nombre
               })
                return perfil;

            }else{
                throw new HttpErrors[401]("El token no es valido");


            }
            
        }else{
            throw new HttpErrors[401]("No esta incluido el token");

        }
       
    }


    
}