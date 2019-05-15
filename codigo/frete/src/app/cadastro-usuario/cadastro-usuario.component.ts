import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(public api: ApiService) { }

  nome: String;
  telefone: String;
  email: String;
  senha: String;
  tipo_de_cadastro: String;

  cadastrar() {
    this.api.cadastrar({'nome' : this.nome, 'telefone' : this.telefone, 'email' : this.email, 'senha' : this.senha, 'tipo_de_cadastro' : this.tipo_de_cadastro }).subscribe( res => {
      console.log(res);

    })
  }


  ngOnInit() {
  }

}
