import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { CompartilhadoService } from '../../../services/compartilhado.service';

@Injectable()
export class AuthGuard implements CanActivate {

    public compartilhado: CompartilhadoService;

    constructor(private router: Router) {
        this.compartilhado = CompartilhadoService.getInstance();
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.compartilhado.isUsuarioLogado()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
