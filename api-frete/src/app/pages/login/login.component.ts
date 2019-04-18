import { ApiService } from './../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../auth.service';
import { first } from 'rxjs/operators';
import { element } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  email: string;
  senha: string;
  status: any;
  emailRecuperacao: string;
  returnUrl = '/painel';

  nomeCompleto: string;
  emailCadastro: string;
  senhaCadastro: string;
  formCadastro: object;

  constructor(private router: Router, public authService: AuthService, private api: ApiService) { }

  ngOnInit() {
    this.returnUrl = '/painel';
  }

  login() {
    this.api.logar({ 'email': this.email, 'senha': this.senha }).subscribe(
      result => {
        this.status = result;
        console.log(this.status);
        if (this.status.status === 'ok') {
          localStorage.setItem('access_token', this.status.token);
          localStorage.setItem('nome_completo', this.status.nomeCompleto);
          this.router.navigate(['/painel']);
          window.location.reload();
        } else {
          console.log('erro ao fazer login');
          this.exibirMensagem('divErroLogin');
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  esqueceuSenha() {
    console.log(this.emailRecuperacao)
    this.api.esqueceuSenha(this.emailRecuperacao).subscribe(
      result => {
        this.exibirMensagem('divAcertoEsqueceu');
        console.log(result);
      },
      err => {
        console.log(err);
        this.exibirMensagem('divErroEsqueceu');
      }
    )
  }

  cadastrar() {
    this.formCadastro = {
      nomeCompleto: this.nomeCompleto,
      email: this.emailCadastro,
      senha: this.senhaCadastro
    };

    this.api.cadastrar(this.formCadastro).subscribe((res) => {
      console.log(res);
      if ('mensagem' in res) {
        console.log(res['mensagem']);
        this.exibirMensagem('divErroCadastrar');
      } else {
        console.log('O token e');
        console.log(res['token']);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('nome_completo', this.formCadastro['nomeCompleto']);
        localStorage.setItem('access_token', res['token']);
        this.router.navigate(['/painel']);
        window.location.reload();
      }
    },
      err => {
        console.log(err);
      }
    );
  }

  exibirMensagem(idTag) {
    const mensagem = document.getElementById(idTag);
    mensagem.hidden = false;
  }

}
