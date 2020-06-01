import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class DataService {
    users: String[];
    token:string = sessionStorage.getItem("token");

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

     login(data) {
        return this.http.post('http://127.0.0.1:3000/user/login', data)
     .map(res => res.json());
     }

     setToken(token) {
        this.token = token;
     }

     getToken() {
       return this.token;
     }

}
