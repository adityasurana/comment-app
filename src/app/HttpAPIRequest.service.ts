import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { seedFeedbacks, seedUsers } from 'src/models/models';


@Injectable({
	providedIn: 'root'
})
export class HttpAPIRequestService {
	constructor(
    private http: HttpClient,
  ) {  }

	userDatatoAdd(data){
    localStorage.setItem('userData', JSON.stringify(data));
	}

  feedbackDatatoAdd(data){
    localStorage.setItem('feedbackData', JSON.stringify(data));
	}

  userDatatoGet(){
    var data = localStorage.getItem('userData');
    return data;
  }

  currentUserDatatoGet(){
    var data = localStorage.getItem('currentUserData');
    return data;
  }

  feedbackDatatoGet(){
    var data = localStorage.getItem('feedbackData');
    return data;
  }


  addseedData(seedUsers) {
    localStorage.setItem('userData', JSON.stringify(seedUsers));
    return;
  }
  addfeedbacksData(seedFeedbacks) {
    localStorage.setItem('feedbackData', JSON.stringify(seedFeedbacks));
    return;
  }

  seedUsersData() {
    return seedUsers;
  }
  seedFeedbacksData() {
    return seedFeedbacks;
  }
}
