import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnInit {
	constructor(
	){}

	ngOnInit(){
	}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if(localStorage.getItem('currentUserData')){
			return true;
		}
		else{
			window.alert("Unauthenticated, Please Login First");
			window.location.href="/";
			return false;
		}
	}

}
