import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: string;
  nomeCompleto: string;

  constructor() { }

  ngOnInit() {
    this.token = localStorage.getItem('access_token');
    this.nomeCompleto = localStorage.getItem('nome_completo');
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('nome_completo');
    localStorage.removeItem('access_token');
    window.location.reload();
  }

}
