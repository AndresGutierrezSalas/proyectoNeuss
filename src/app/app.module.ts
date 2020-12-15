
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { listaPlatillos } from './listaPlatillos/listaPlatillos.component';
import { administrador } from './administrador/administrador.component';
import { listaPedidosActivos } from './listaPedidosActivos/listaPedidosActivos.component';
import { ListaComponent } from './listaPlatillos/lista/lista.component';
import { PlatilloComponent } from './platillo/platillo.component';



@NgModule({
  declarations: [
    AppComponent,
    listaPlatillos,
    administrador,
    listaPedidosActivos,
    ListaComponent,
    PlatilloComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
