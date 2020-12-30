import {Component} from '@angular/core';

@Component({ //objeto json con las llaves
	selector:'administrador',
	templateUrl:'./administrador.component.html',
	styleUrls: ['./administrador.component.css']
})
export class administrador{
	verPedidos: boolean = false;
	verPlatillos: boolean = false;
	
}
export class evento1{
	verPedidos: boolean = true;	
}