import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth | undefined;

  get auth(): Auth{
    return { ...this._auth!}
  }

  constructor( private http: HttpClient) { }


  login() {
    return this.http.get<Auth>(`http://localhost:3050/admin/5`)
              .pipe(
                tap( auth => this._auth = auth),
                tap( auth => localStorage.setItem('Name', auth.Name )),

              );
  }
}
