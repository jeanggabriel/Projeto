import { Component, OnInit } from '@angular/core';
import NewsAPI from 'newsapi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias = undefined;

  constructor() {
    this.requisitaNoticias()
  }

  ngOnInit() {
  }

  requisitaNoticias() {
    const newsapi = new NewsAPI('668f15e46e3b46eab2926b9265c645cd');
    // To query /v2/top-headlines
    // All options passed to topHeadlines are optional, but you need to include at least one of them
    newsapi.v2.topHeadlines({
      language: 'pt',
      country: 'br'
    }).then(response => {
      console.log(response);
      this.noticias = response.articles;
      /*
        {
          status: "ok",
          articles: [...]
        }
      */
    });
  };
  

}
