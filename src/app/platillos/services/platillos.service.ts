import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Platillo } from '../interfaces/platillos.interface';


@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor( private http: HttpClient ) { }

  getPlatillos(): Observable<Platillo[]>{
    return this.http.get<Platillo[]>('http://localhost:3050/course');
  }

  agregarPlatillo( platillo: Platillo ): Observable<Platillo>{
    return this.http.post<Platillo>('http://localhost:3050/course', platillo);
  }

  getPlatilloPorId( idCourse: number ):Observable<Platillo> {
    console.log(`http://localhost:3050/course/${ idCourse }`);
    return this.http.get<Platillo>(`http://localhost:3050/course/${ idCourse }`);
  }

  actualizarPlatillo( platillo: Platillo ):Observable<Platillo> {
    return this.http.put<Platillo>(`http://localhost:3050/course/${ platillo.idCourse }`, platillo );
  }
  borrarPlatillo( idCourse:number ):Observable<any> {
    return this.http.delete<any>(`http://localhost:3050/course/${ idCourse }` );
  }

}
