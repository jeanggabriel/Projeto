import { axiosClient } from '@angular/common/axios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private axios: axiosClient) { }

  logar(pessoa) {
    return this.http.post('http://localhost:3000/api/login', pessoa);
  }

  cadastrar(pessoa) {
    return this.http.post('http://localhost:3000/api/cadastrar', pessoa);
  }

  recuperarSenha(token, novaSenha) {
    return this.http.post('http://localhost:3000/api/recuperar_senha', {'token': token, 'novaSenha': novaSenha});
  }

  esqueceuSenha(email) {
    return this.http.post('http://localhost:3000/api/esqueceusenha', {'email' : email});
  }

  redefinirSenha(dados) {
    return this.http.post('http://localhost:3000/api/redefinirsenha', dados);
  }

  editarRegistro(dados) {
    return this.http.put('http://localhost:3000/crudusuario/',dados);
  }

}
