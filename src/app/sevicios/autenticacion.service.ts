import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="http://localhost:8080/api/login";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) { 
    console.log("corriendo ok");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('usuario')||"{}"));
   
  }

  IniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe( map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  get UsuarioAutenticado(){
    console.log('value'+JSON.stringify(this.currentUserSubject.value))
    return this.currentUserSubject.value;
  }
}
