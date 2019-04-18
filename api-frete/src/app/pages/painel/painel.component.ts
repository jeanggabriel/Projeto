import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'painel.component',
  templateUrl: './painel.component.html'
})
export class PainelComponent {

  constructor(private api: ApiService,private http: HttpClient) { }

  nome:string;
  endereco: string;
  telefone: string;
  enableEdit: boolean = false;
  disableEdit: boolean = true;

  nomeUpdate: string;
  enderecoUpdate: string;
  telefoneUpdate: string;
  formUpdate: object;

  listaItens: any;
  nomeCadastro: string;
  enderecoCadastro: string;
  telefoneCadastro: string;
  formCadastro: object;

  listarUsuario() {
    return this.http.get('http://localhost:3000/crudusuario/').subscribe((result =>{
      this.listaItens = result;
      console.log(this.listaItens)
    }))
  }

  inserirUsuario() {
    this.formCadastro = {
    nome: this.nomeCadastro,
    endereco: this.enderecoCadastro,
    telefone: this.telefoneCadastro
    };
    return this.http.post('http://localhost:3000/crudusuario/', this.formCadastro).subscribe((res) => {
      console.log(res);
      window.location.reload();
      })
  }

  excluirUsuario(idobjeto) {
    console.log(idobjeto)
    return this.http.delete(`http://localhost:3000/crudusuario/${idobjeto}`).subscribe((res) => {
      console.log(res)
      window.location.reload();
    })
  }

  editarUsuario(nomeUpdate,enderecoUpdate,telefoneUpdate) {
    this.formUpdate = {
      nome : this.nomeUpdate,
      endereco : this.enderecoUpdate,
      telefone : this.telefoneUpdate,
    };
    this.api.editarRegistro(this.formUpdate).subscribe((res) => {
      console.log(res)
      window.location.reload()
    })
  }

  ativarForm() {
    console.log('to aqui')
    this.enableEdit = true;
    this.disableEdit = false;
  }

  ngOnInit() {
    this.listarUsuario()
  }
}