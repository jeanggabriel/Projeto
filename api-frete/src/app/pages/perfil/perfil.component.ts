import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  token: any;
  senhaAntiga: any;
  senha: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.token = localStorage.getItem('access_token');
  }

  redefinirSenha() {
    this.api.redefinirSenha({'token' : this.token, 'senhaAntiga' : this.senhaAntiga, 'senhaNova' : this.senha}).subscribe(
      result => {
        console.log(result)
        this.mostrarMensagemSucesso();
      },
      err => {
        console.log(err)
        this.mostrarMensagemErro();
      }
    );
  }

  mostrarMensagemSucesso() {
    const mensagem = document.getElementById('sucesso');
    mensagem.hidden = false;
  }

  mostrarMensagemErro() {
    const mensagem = document.getElementById('erro');
    mensagem.hidden = false;
  }

}

