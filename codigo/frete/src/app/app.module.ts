import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CargaComponent } from './carga/carga.component';
import { CadastroCargaComponent } from './cadastro-carga/cadastro-carga.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroCaminhaoComponent } from './cadastro-caminhao/cadastro-caminhao.component';
import { ExibicaoCaminhaoComponent } from './exibicao-caminhao/exibicao-caminhao.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CargaComponent,
    CadastroCargaComponent,
    CadastroUsuarioComponent,
    CadastroCaminhaoComponent,
    ExibicaoCaminhaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
