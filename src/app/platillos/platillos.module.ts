import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from  '@angular/flex-layout';
import { PlatillosRoutingModule } from './platillos-routing.module';
import { MaterialModule } from '../material/material.module';
import { AgregarPlatilloComponent } from './pages/agregar-platillo/agregar-platillo.component';
import { PlatilloComponent } from './pages/platillo/platillo.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaPlatillosComponent } from './pages/lista-platillos/lista-platillos.component';
import { PlatilloTarjetaComponent } from './components/platillo-tarjeta/platillo-tarjeta.component';
import { FormsModule } from '@angular/forms';
import { ImagenPipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [AgregarPlatilloComponent, PlatilloComponent, HomeComponent, ListaPlatillosComponent, PlatilloTarjetaComponent, ImagenPipe],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    PlatillosRoutingModule,
    FormsModule
    

  ]
})
export class PlatillosModule { }
