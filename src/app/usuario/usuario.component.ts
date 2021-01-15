import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  items: any;
  constructor(private conexion:ConexionService) {
    	this.conexion.ListaItem().subscribe(items=>{
        this.items = items;
      })
  }

  ngOnInit(): void {
  }
  
  volver: boolean = false;

}

