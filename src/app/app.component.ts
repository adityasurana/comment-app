import { Component, OnInit } from '@angular/core';
import { HttpAPIRequestService } from './HttpAPIRequest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'comment-app';
  usersData = [];
  feedbacksData = [];
  constructor(
		private request: HttpAPIRequestService,
		) { }

	ngOnInit() {
    this.usersData = this.request.seedUsersData();
    this.feedbacksData = this.request.seedFeedbacksData();
    this.request.addseedData(this.usersData)
    this.request.addfeedbacksData(this.feedbacksData)
  }
}
