import { Router } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from '../authentication/token.service';

@Injectable()
export class AuthHandlerInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url) {
      return next.handle(request);
    }

    const token = this.tokenService.getToken();
    if (!!token) {
      request = request.clone({
        setHeaders: { Authorization: `Token ${token.token}` }
      });
    }
    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err.status === 401) {
          this.router.navigateByUrl('');
          this.tokenService.clearToken();
        }
        return throwError(err);
      })
    );
  }
}