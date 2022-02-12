import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpAPIRequestService } from '../HttpAPIRequest.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
	styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  email : string;
  message: string;
  Feedbacks: any;
  constructor(
    private request: HttpAPIRequestService,
  ) { }

  ngOnInit() {
    var userdata = this.request.currentUserDatatoGet();
    this.email = JSON.parse(userdata)[0].email;
    var feedbackdata = this.request.feedbackDatatoGet();
    this.Feedbacks = JSON.parse(feedbackdata);
	}

  onAddFeedback(form: NgForm) {
    if (!form.valid) {
			return;
		}
    const email = this.email;
    const feedback = form.value.feedback;
    this.Feedbacks.push({email: email, feedback: feedback})
    this.request.feedbackDatatoAdd(this.Feedbacks);
    this.message = "Feedback Added"
  }

}
