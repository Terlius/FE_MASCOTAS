import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfiguracionRutas } from '../config/rutas.config';
import { Observable } from 'rxjs';
import { Mascota } from '../interfaces/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private http: HttpClient) { 

    
  }


  getMascotas():Observable<Mascota[]>{
    return this.http.get<Mascota[]>(ConfiguracionRutas.RUTA_BACKEND_GET);
  }

  getMascota(id:number):Observable<Mascota>{
    return this.http.get<Mascota>(`${ConfiguracionRutas.RUTA_BACKEND_GET}${id}`);
  }

  deleteMascota(id:number):Observable<void>{
    return this.http.delete<void>(`${ConfiguracionRutas.RUTA_BACKEND_GET}${id}`);
  }

  createMascota(mascota:Mascota):Observable<Mascota>{
    return this.http.post<Mascota>(ConfiguracionRutas.RUTA_BACKEND_GET, mascota);
  }

  updateMascota(id:number, mascota:Mascota):Observable<void>{
    return this.http.put<void>(`${ConfiguracionRutas.RUTA_BACKEND_GET}${id}`, mascota);
  }

}
