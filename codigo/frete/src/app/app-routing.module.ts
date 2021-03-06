import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CargaComponent } from './carga/carga.component';
import { CadastroCargaComponent } from './cadastro-carga/cadastro-carga.component';
import { ExibicaoCaminhaoComponent } from './exibicao-caminhao/exibicao-caminhao.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroCaminhaoComponent } from './cadastro-caminhao/cadastro-caminhao.component';
const routes: Routes = [
  { path: 'carga', component: CargaComponent},
  { path: '', component: LoginComponent},
  { path: 'cadastrocarga', component: CadastroCargaComponent},
  { path: 'caminhao', component: ExibicaoCaminhaoComponent},
  { path: 'cadastrousuario', component: CadastroUsuarioComponent},
  { path: 'cadastrocaminhao', component: CadastroCaminhaoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
