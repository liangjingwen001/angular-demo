import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  constructor(public http:Http) { }

  getNews(data) {
     return this.http.post('http://127.0.0.1:3000/news/selectNews', data)
  .map(res => res.json());
  }
  
  delNews(data) {
    return this.http.post('http://127.0.0.1:3000/news/delNews', data)
    .map(res => res.json());
  }
}
