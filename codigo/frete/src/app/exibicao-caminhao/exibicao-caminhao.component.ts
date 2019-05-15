import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-exibicao-caminhao',
  templateUrl: './exibicao-caminhao.component.html',
  styleUrls: ['./exibicao-caminhao.component.css']
})
export class ExibicaoCaminhaoComponent implements OnInit {

  constructor(public api: ApiService) { }

  caminhoes: any;
  getcaminhao() {
    this.api.getcaminhao({}).subscribe( res => {
      this.caminhoes = res;
      console.log(this.caminhoes);
    })
  }

  ngOnInit() {
    this.getcaminhao()
  }

}
