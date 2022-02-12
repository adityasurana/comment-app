import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpAPIRequestService } from '../HttpAPIRequest.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string;
  userData: any;

	constructor(
		private request: HttpAPIRequestService,
    private router: Router,
		) { }

	ngOnInit() {
    var data = this.request.userDatatoGet();
    this.userData = JSON.parse(data);
  }

  onCreate(form: NgForm) {
    if (!form.valid) {
			return;
		}
    const email = form.value.email;
    const password = form.value.password;
    const secretcode = form.value.secretcode;
    this.userData.push({email: email, password: password, secretcode: secretcode})
    this.request.userDatatoAdd(this.userData);
    this.router.navigate(['/']);
	}
}
