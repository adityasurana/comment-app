import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpAPIRequestService } from '../HttpAPIRequest.service';
import { AuthService } from './auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit{
	error:boolean = false;
  userData;
	constructor(
    private request: HttpAPIRequestService,
		private authService: AuthService,
		private router: Router,
	) { }


	ngOnInit(){
    var userdata = this.request.currentUserDatatoGet();
		if(userdata){
			this.router.navigate(['/feedback']);
		} else{
      var data = this.request.userDatatoGet();
      this.userData = JSON.parse(data);
    }
	}

	onSubmit(form: NgForm){
		if (!form.valid) {
			return;
		}
		const email = form.value.email;
		const password = form.value.password;
    var currentUser = this.userData.filter(item => item.email == email && item.password == password);
    if (currentUser.length > 0) {
      this.authService.login(currentUser)
    } else {
      this.error = true;
    }
		form.reset();
	}
}
