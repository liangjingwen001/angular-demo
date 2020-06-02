import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse,
    HttpHeaderResponse,
    HttpResponse,
    HttpEvent
} from '@angular/common/http';
import {Observable} from 'rxjs';

export class MyInterceptor implements HttpInterceptor {
    constructor (

    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log(next)
    }
  }
