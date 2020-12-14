import {Component} from '@angular/core';

@Component({ //objeto json con las llaves
	selector:'listaPlatillos',
	templateUrl:'./listaPlatillos.component.html',
	styleUrls: ['./listaPlatillos.component.css']
})
export class listaPlatillos{
	public nombreComponent='Componente de listaPlatillos';
	public definicion='este componente es para visualizar los platillos existentes y agregar nuevos platillos a este componente';
	vacio: boolean = false;
	volver: boolean = false;
	agregarPlatillo: boolean = false;
	
}