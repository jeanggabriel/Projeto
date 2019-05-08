import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  public API_URL = "http://localhost:3000";
  // public API_URL = "http://www.api-hom.nksaude.com.br";


  constructor(private http: HttpClient) { }

  getHeader() {
    const usuario = JSON.parse(localStorage.getItem('currentUser'));
    return {
      headers: {
        'Authorization': 'Bearer ' + (usuario ? usuario.token : '')
      }
    };
  }

  public uploadFile(body) {
    return this.http.post(`${this.API_URL}/anexos/upload`, body, this.getHeader());
  }

  get(id, regiao) {
    return this.http.get(`${this.API_URL}/anexos/${id}/${regiao}`, this.getHeader());
  }

  login(form) {
    return this.http.post(`${this.API_URL}/usuarios/login`, form);
  }

  cadastrar(form) {
    return this.http.post(`${this.API_URL}/usuarios/cadastro`, form, this.getHeader());
  }

  validartoken() {
    return this.http.get(`${this.API_URL}/usuarios/validartoken`, this.getHeader());
  }
  esqueciSenha(form){
    return this.http.post(`${this.API_URL}/usuarios/esqueci-senha`, form, this.getHeader());
  }

  recuperarSenha(form){
    return this.http.post(`${this.API_URL}/usuarios/recuperar_senha`,form,this.getHeader());
  }
  token(form){
    console.log(form)
    return this.http.get(`${this.API_URL}/usuarios/token/${form}`);
  }
}