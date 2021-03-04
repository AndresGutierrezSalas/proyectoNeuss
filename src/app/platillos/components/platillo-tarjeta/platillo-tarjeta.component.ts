import { Component, Input } from '@angular/core';
import { Platillo } from '../../interfaces/platillos.interface';

@Component({
  selector: 'app-platillo-tarjeta',
  templateUrl: './platillo-tarjeta.component.html',
  styles: [
  ]
})
export class PlatilloTarjetaComponent {

  @Input() platillo!: Platillo;


}
