import { Component, OnInit } from '@angular/core';
import { News } from '../modelos/News';
import { SubmissionControllerComponent } from '../submission-controller/submission-controller.component';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css'],
})
export class SubmissionComponent implements OnInit {
  submission: News = {
    itemId: -1,
    title: '',
    page_: '',
    points: -1,
    username: {
      username: '',
      created: new Date(),
      karma: -1,
      about: '',
      maxvisit: -1,
      minaway: -1,
      delay: -1,
      showdead: false,
      noprocrast: false,
    },
    datePublished: '',
    link: '',
    text: '',
    type: '',
    comments: [],
    likedBy: [],
  };

  constructor(
    private submissionControllerComponent: SubmissionControllerComponent
  ) {}

  ngOnInit(): void {
    this.submissionControllerComponent.getSubmission().then((data) => {
      this.submission = data;
    });
  }

  likeBtn() {
    let id: number;
  }
  addComment() {
    let id: number;
  }
}
