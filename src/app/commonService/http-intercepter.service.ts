import { Injectable } from '@angular/core';
// import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CommonService } from './common.service';
import { Router } from '@angular/router';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(public commonService: CommonService, private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.headers.has('InterceptorSkipHeader')) {

        } else {
            const token: string = localStorage.getItem('access_token');
            if (token) {
                request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            }
            if (!request.headers.has('Content-Type')) {
                request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            }
            request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        }
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // this.commonService.hide();
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                
                return throwError(error);
            }));
    }
}
