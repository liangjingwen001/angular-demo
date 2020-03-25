import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/services.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: String;
  age: number;
  address: Address;
  hobbies: string[];
  hello: any;
  isEdit: boolean;
  // 钩子函数
  constructor(public dataService:DataService) {
  console.log(dataService.getUsers())

   }
   testClick() {
    console.log('点击事件被触发')
   }
   addHobbies(val) {
   this.hobbies.unshift(val)
   return false;
   }
   del(val) {
   this.hobbies.splice(val, 1)
   }
   edit() {
   this.isEdit = !this.isEdit;
   }
   // 初始化数据
   init() {
   this.dataService.getInitData().subscribe(res => {
      console.log(res)
    })
   }

  ngOnInit() {
    this.init();
    this.name = '露西';
    this.age = 18;
    this.address = {
    city: '广州',
    state: '天河区',
    stree: '黄村街道'
    };
    this.hobbies = ['看电影','听歌','打游戏']
    this.hello = 123;
    this.hello = '你好';
    this.isEdit = true
  }

}

interface Address{
  city: String,
  state: String,
  stree: String
  }
