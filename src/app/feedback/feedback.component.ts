import { Component, OnInit } from '@angular/core';
import { HttpAPIRequestService } from '../HttpAPIRequest.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
})
export class FeedbackComponent implements OnInit {
  email = '';
  searchText = '';
	Feedbacks = [];
  allFeedbacks = [];

  constructor(
		private request: HttpAPIRequestService,
		) { }

  ngOnInit() {
    var feedbackdata = this.request.feedbackDatatoGet();
    this.Feedbacks = JSON.parse(feedbackdata);
    var userdata = this.request.currentUserDatatoGet();
    this.email = JSON.parse(userdata)[0].email;
    this.allFeedbacks = this.Feedbacks
	}

  onShowMy() {
    this.Feedbacks = this.Feedbacks.filter(feedback => feedback.email == this.email);
  }

  onShowAll() {
    this.Feedbacks = this.allFeedbacks;
  }
}
