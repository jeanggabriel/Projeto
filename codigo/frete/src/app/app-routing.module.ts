import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CargaComponent } from './carga/carga.component';
import { CadastroCargaComponent } from './cadastro-carga/cadastro-carga.component';

const routes: Routes = [
 { path: 'carga', component: CargaComponent},
  { path: 'login', component: LoginComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
