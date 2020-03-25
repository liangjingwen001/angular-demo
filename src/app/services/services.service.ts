import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class DataService {
    users:String[];

    constructor(public http:Http) {
    this.users = ['阿萨德','束带结发']
     }

     getUsers() {
      return this.users;
     }
     getInitData() {
        return this.http.get('http://jsonplaceholder.typicode.com/posts')
     .map(res => res.json());
     }
}
