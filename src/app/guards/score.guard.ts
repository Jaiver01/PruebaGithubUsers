import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class ScoreGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (Number(route.paramMap.get('score')) < 30) {
			console.log('El score del usuario es menor a 30');
			// El score de todos los resultados de la api está llegando como 1.0,
			// se deja habilitado para evitar perder la funcionalidad
			// return false;
		}

    	return true;
  }
}
