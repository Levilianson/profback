import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { HeaderService } from './sevicios/header.service';
import { InterceptorService } from './sevicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    IniciarSesionComponent,
    PorfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeaderService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
