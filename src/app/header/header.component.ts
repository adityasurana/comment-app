import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { HttpAPIRequestService } from '../HttpAPIRequest.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
	email = '';
  username: string;

	constructor(
		private authService: AuthService,
    private router: Router,
	) { }

	ngOnInit(){

	}

	onLogout(){
		this.authService.logout();
	}

}
