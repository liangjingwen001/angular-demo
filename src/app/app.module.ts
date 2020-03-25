import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/services.service';
import { DetailComponent } from './components/detail/detail.component';

const appRoutes:Routes = [
  {path:"",component:UserComponent},
  {path:"detail",component:DetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  // 将组件显示在index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
