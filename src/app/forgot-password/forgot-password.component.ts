import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpAPIRequestService } from '../HttpAPIRequest.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  Users;
  gotpassword = false
  yourpassword = ''
  constructor(
		private request: HttpAPIRequestService,
    private router: Router,
	) { }


  ngOnInit(): void {
    this.gotpassword = false
    var data = this.request.userDatatoGet();
    this.Users = JSON.parse(data);
  }

  onForgotPassword(form: NgForm) {
    if (!form.valid) {
			return;
		}
    const email = form.value.email;
		const secretcode = form.value.secretcode;
    const userdata = this.Users.filter(user => user.email == email && user.secretcode == secretcode)
    if (userdata.length > 0) {
      this.yourpassword = 'Your Password: ' + `${userdata[0].password}`;
    } else {
      this.yourpassword = 'No user with this email or secret code, please signup';
    }
    this.gotpassword = true
  }
}
