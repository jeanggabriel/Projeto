import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  logar(pessoa) {
    return this.http.post('https://localhost:3000/user', pessoa);
  }
  cadastrar(pessoa) {
    return this.http.post('https://localhost:3000/user_login', pessoa);
  }
  cadastrarcaminhao(cadastrarcaminhao){
    return this.http.post('https://localhost:3000/user_caminhao',cadastrarcaminhao)
  }
  cadastrarcarga(cadastrarcarga){
    return this.http.post('https://localhost:3000/user_carga',cadastrarcarga)
  }
  getcaminhao(getcaminhao){
    return this.http.get('https://localhost:3000/user_caminhao',getcaminhao)
  }
  getcarga(getcarga){
    return this.http.get('https://localhost:3000/user_carga',getcarga)
  }
}