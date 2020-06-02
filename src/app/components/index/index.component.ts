import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/services.service';
import { NewsDataService } from '../../services/news-data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  token:string;
  dataList:[];

  constructor(
    public dataService:DataService,
    public newsDataService:NewsDataService,
    public router:Router,
    ) {
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
        } else if (res.code === 401) {
          this.router.navigate(['/'])
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
