import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  listaItens: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listarUsuario();
  }

  listarUsuario() {
    return this.http.get('http://localhost:3000/ofertasfacebook/').subscribe((result =>{
      this.listaItens = result;
      console.log(this.listaItens)
    }))
  }
}
