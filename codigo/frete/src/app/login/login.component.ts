import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public api: ApiService) { }

  email: String;
  password: String;

  login() {
    this.api.logar({'email' : this.email, 'senha' : this.password}).subscribe( res => {
      console.log(res)
    })
  }

  ngOnInit() {
  }
}