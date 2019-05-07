import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CargaComponent } from './carga/carga.component';
import { CadastroCargaComponent } from './cadastro-carga/cadastro-carga.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CargaComponent,
    CadastroCargaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
