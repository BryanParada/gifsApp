import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  //! signo de exclamacion = Non-null assertion operator
  //txtbuscar nunca sera null ya que esta definido en busqueda.component.html
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
 
  buscar(){

    const valor = this.txtBuscar.nativeElement.value;

    console.log(valor);

    this.txtBuscar.nativeElement.value = "";
    
  }

}
