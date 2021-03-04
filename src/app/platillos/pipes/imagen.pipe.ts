import { Pipe, PipeTransform } from '@angular/core';
import { Platillo } from '../interfaces/platillos.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(platillo: Platillo ): string {

    if( !platillo.idCourse && !platillo.Img ) {
      return 'assets/platillo.jpeg';
    } else if ( platillo.Img ){
      return platillo.Img;
    }else{
      return platillo.Img;
    }
   
    //return `assets/platillos/${ platillo.idCourse }.jpg`;
    //console.log(platillo);
    
  }

}
