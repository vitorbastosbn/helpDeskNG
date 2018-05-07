import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { CompartilhadoService } from '../../../services/compartilhado.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    compartilhado: CompartilhadoService;

    constructor() {
        this.compartilhado = CompartilhadoService.getInstance();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let authResquest: any;

        if (this.compartilhado.isUsuarioLogado()) {
            authResquest = req.clone({
                setHeaders: {
                    Authorization: localStorage.getItem('token')
                }
            });
            return next.handle(authResquest);
        } else {
            return next.handle(req);
        }

    }
}
