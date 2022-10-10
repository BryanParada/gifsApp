import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string [] = [ ];

  get historial() {
        return [...this._historial];
  }

  buscarGifs( query: string = '' ){

    query = query.trim().toLowerCase();
     
    //si no existe lo insertamos
    if( !this._historial.includes(query)){
      this._historial.unshift( query ); //insertar al inicio
      this._historial = this._historial.splice(0,10); //maximo 10
    }
 
    console.log(this._historial);
    

  }

}
