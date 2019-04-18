import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {

  token: string;
  senha = '';
  senha1 = '';

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      console.log(this.token);
  });
  }

  recuperarSenha() {
    this.api.recuperarSenha(this.token, this.senha).subscribe(res => {
      console.log(res);
      this.router.navigate(['/'])
    },
    err => {
      console.log(err);
    }
  );
  }

}
