import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes} from '@angular/router'

import { DataService } from './services/services.service';
import { NewsDataService } from './services/news-data.service';
import { AuthGuard } from './guards/auth.guards';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';

const appRoutes:Routes = [
  {path:"",component:LoginComponent},
  {path:"index",component:IndexComponent, canActivate:[AuthGuard]},
  {path:"detail",component:DetailComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [  // 自定义模块
    AppComponent,
    UserComponent,
    DetailComponent,
    LoginComponent,
    IndexComponent
  ],
  imports: [  // 第三方模块
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [  // 数据提供器
    DataService,
    NewsDataService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
