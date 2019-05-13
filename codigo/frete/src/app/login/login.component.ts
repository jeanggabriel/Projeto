import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public api: ApiService) { }

  username: String;
  password: String;

  login(username,password) {
    this.api.logar({'email' : username, 'senha' : password}).subscribe( res => {
      console.log(username)
    })
  }

  ngOnInit() {
  }

}
