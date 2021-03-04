import { Component, OnInit } from '@angular/core';
import { Platillo } from '../../interfaces/platillos.interface';
import { PlatillosService } from '../../services/platillos.service';

@Component({
  selector: 'app-lista-platillos',
  templateUrl: './lista-platillos.component.html',
  styles: [`
    mat-card {
      margin-top: 20px
    }
    `]
})
export class ListaPlatillosComponent implements OnInit {

  platillos: Platillo[] = [];

  constructor( private platillosService: PlatillosService) { }

  ngOnInit(): void {

    this.platillosService.getPlatillos()
      .subscribe( platillos => {
        this.platillos = platillos; 
      });


  }

}
