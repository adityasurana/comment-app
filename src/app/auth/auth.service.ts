import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

	constructor(private http: HttpClient, private router: Router){}

	login(currentUser) {
    localStorage.setItem('currentUserData', JSON.stringify(currentUser));
    this.router.navigate(['/feedback']);
  }

	logout() {
		localStorage.removeItem('currentUserData');
		this.router.navigate(['/']);
	}
}
