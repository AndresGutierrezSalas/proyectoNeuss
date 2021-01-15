import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sesion=false;
  registrarse = false;
  admin=true;

}
