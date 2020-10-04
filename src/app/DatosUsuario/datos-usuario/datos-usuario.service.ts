import { Observable } from 'rxjs';
import { HttpApiService } from './../../_shared/http/http-api.service';
import { Injectable } from '@angular/core';
import { HttpRequestMethod } from 'src/app/_shared/http';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  constructor(private httpApiService: HttpApiService ) { }

  obtenerLocacion(nombreCiudad: string ): Observable<any[]>{
    return this.httpApiService.apiGreenLeaves<any[]>(HttpRequestMethod.GET, `DatosUsuario/ObtenerLocacion/${nombreCiudad}`);
  }
  // enviarDatosUsuario(datosUsuario: DatosUsuario ): Observable<any[]>{
  //   return this.httpApiService.apiGreenLeaves<any[]>(HttpRequestMethod.POST, `DatosUsuario/ObtenerLocacion`, datosUsuario);
  // }
}
