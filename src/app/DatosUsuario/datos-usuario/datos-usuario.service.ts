import { from, Observable } from 'rxjs';
import { HttpApiService } from './../../_shared/http/http-api.service';
import { Injectable } from '@angular/core';
import { HttpRequestMethod } from 'src/app/_shared/http';
import {DatosUsuario} from 'src/app/DatosUsuario/datos-usuario/datos-usuario.component';

@Injectable({
  providedIn: 'root'
})


export class DatosUsuarioService {

  constructor(private httpApiService: HttpApiService ) { }

  obtenerLocacion(nombreCiudad: string ): Observable<any[]>{
    return this.httpApiService.apiGreenLeaves<any[]>(HttpRequestMethod.GET, `DatosUsuario/ObtenerLocacion/${nombreCiudad}`);
  }
  enviarDatosUsuario(datosUsuario ): Observable<any[]>{
    return this.httpApiService.apiGreenLeaves<any[]>(HttpRequestMethod.POST, `DatosUsuario/EnviarDatosUsuario`, datosUsuario);
  }
}
