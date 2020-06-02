import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../../services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  passWord: string;
  constructor(
    public router:Router,
    public dataService:DataService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let data = {
      userName: this.userName,
      passWord: this.passWord
    }
    this.dataService.login(data).subscribe(res => {
       if (res.code === 200) {
         this.router.navigate(['/index'],{queryParams:{id:'11'}})
         this.dataService.setToken(res.token)
         sessionStorage.setItem("token", res.token)
       }
     })
  }

}
