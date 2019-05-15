import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  constructor(public api: ApiService) { }

  carga: any;
  getcarga() {
    this.api.getcarga({}).subscribe( res => {
      this.carga = res;
      console.log(this.carga);
    })
  }

  ngOnInit() {
    this.getcarga()
  }

}