import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { DataService } from '../services/services.service';

@Injectable()
export class AuthGuard implements CanActivate {
   constructor(
       private router: Router,
       public dataService: DataService
     ) { }

  canActivate(): boolean {
    if (this.dataService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/'])
      return false
    }
  }
}
