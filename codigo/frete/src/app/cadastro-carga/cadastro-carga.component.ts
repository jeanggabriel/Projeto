import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-cadastro-carga',
  templateUrl: './cadastro-carga.component.html',
  styleUrls: ['./cadastro-carga.component.css']
})
export class CadastroCargaComponent implements OnInit {

  constructor(public api: ApiService) { }

  tipo: String;
  descricao: String;
  cidade: String;
  estado: String;
  cep: String;
  peso: String;

  cadastrarcarga() {
    this.api.cadastrarcarga({'tipo' : this.tipo, 'descricao' : this.descricao, 'cidade' : this.cidade, 'estado': this.estado, 'cep': this.cep, 'peso': this.peso}).subscribe( res => {
      console.log(res)
    })
  }
  ngOnInit() {
  }

}
