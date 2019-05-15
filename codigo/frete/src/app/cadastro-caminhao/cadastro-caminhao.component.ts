import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-cadastro-caminhao',
  templateUrl: './cadastro-caminhao.component.html',
  styleUrls: ['./cadastro-caminhao.component.css']
})
export class CadastroCaminhaoComponent implements OnInit {

  constructor(public api: ApiService) { }

  tipo_de_caminhao: String;
  descricao: String;
  cidade: String;
  estado: String;
  cep: String;
  peso_max: String;

  cadastrarcaminhao() {
    this.api.cadastrarcaminhao({'tipo_de_caminhao' : this.tipo_de_caminhao, 'descricao' : this.descricao, 'cidade' : this.cidade, 'estado': this.estado, 'cep': this.cep, 'peso_max': this.peso_max}).subscribe( res => {
      console.log(res)
    })
  }
  ngOnInit() {
  }

}
