import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/services.service';
import { NewsDataService } from '../../services/news-data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  token:string;
  dataList:[];

  constructor(public dataService:DataService, public newsDataService:NewsDataService) {
    this.token = this.dataService.getToken();
  }

  ngOnInit(): void {
    this.initData()
  }

  initData() {
    let data = {token: this.token}
     this.newsDataService.getNews(data).subscribe(res => {
        if (res.code === 200) {
          this.dataList = res.data;
        }
      })
  }

  delNews(id) {
    let data = {
      _id: id,
      token: this.token
      }
    this.newsDataService.delNews(data).subscribe(res => {
      if (res.code === 200) {
        this.initData();
      }
    })
  }

}
