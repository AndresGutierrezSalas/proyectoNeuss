import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platillo } from '../../interfaces/platillos.interface';
import { PlatillosService } from '../../services/platillos.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar-platillo',
  templateUrl: './agregar-platillo.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarPlatilloComponent implements OnInit {

  platillo: Platillo = {
    idCourse: 0,
    Name: '',
    Stock: 0,
    Price: 0,
    Description: '',
    Img: ''

  }

  constructor( private platillosService: PlatillosService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {

    if ( !this.router.url.includes('editar')){
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({idCourse}) => this.platillosService.getPlatilloPorId( idCourse ) )
      )
      .subscribe( platillo => this.platillo = platillo );
      //.subscribe( platillo => console.log(platillo));
  }

  guardar(){
    if(this.platillo.Name.trim().length === 0 ){
      return;
    }
    if(this.platillo.Description.trim().length === 0 ){
      return;
    }
    //if(this.platillo.Img.trim().length === 0 ){
    //  return;
    //}

    if (this.platillo.idCourse){
      //Actualizar
      this.platillosService.actualizarPlatillo( this.platillo )
      .subscribe( platillo => console.log( 'Actualizando', platillo ))
    } else {
      //Crear
      this.platillosService.agregarPlatillo( this.platillo )
      .subscribe( platillo =>{
        this.router.navigate(['/platillos/listaPlatillos']);
      })

   }

  }


  borrarPlatillo(){

    this.platillosService.borrarPlatillo( this.platillo.idCourse! )
      .subscribe( resp => {
        
        this.router.navigate(['/platillos/listaPlatillos']);
        
      });

  }

}