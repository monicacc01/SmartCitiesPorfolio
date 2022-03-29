import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) { }

  getInfoPagina(){
    return this.http.get('assets/data/infopagina.json');
  }

getInfoEquipo(){

  return this.http.get('https://porfoliouab-default-rtdb.firebaseio.com/equipo.json');
}

}
