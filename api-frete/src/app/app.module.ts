import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { ApiService } from './services/api.service';

import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ngModuleJitUrl } from '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { PainelComponent } from './pages/painel/painel.component';
import { HomeComponent } from './pages/home/home.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'painel', component: PainelComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },
  { path: 'perfil',component:PerfilComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'ofertas',component:OfertasComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PainelComponent,
    HomeComponent,
    RecuperarSenhaComponent,
    PerfilComponent,
    OfertasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing : true }),
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ApiService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
