import { Component } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class platillo {
  processFile(imageInput: any) {
  }
  volver: boolean = false;

  item:any= {   //formulario para rellenar y subir a la bd
      name:"",
      description:"",
      image:"",
      price:0
  }

  constructor(private servicio:ConexionService){ }
  
  agregar(){
    this.servicio.agregarItem(this.item); //agrega todos los items actualizados
    this.item.name='';    //deja los items vacios
    this.item.description='';
    this.item.image='';
    this.item.price=0;
  }
}
