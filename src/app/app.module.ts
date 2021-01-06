
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {ConexionService } from './services/conexion.service';
import {FormsModule} from '@angular/forms';

import { listaPlatillos } from './listaPlatillos/listaPlatillos.component';
import { administrador } from './administrador/administrador.component';
import { listaPedidosActivos } from './listaPedidosActivos/listaPedidosActivos.component';
import { ListaComponent } from './listaPlatillos/lista/lista.component';
import { platillo } from './platillo/platillo.component';

//importar }PrimeNG
import { ButtonModule } from 'primeng/button';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    listaPlatillos,
    administrador,
    listaPedidosActivos,
    ListaComponent,
    platillo,
    PiePaginaComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule,
    ButtonModule
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})

export class AppModule { }
