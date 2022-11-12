import { Component, OnInit } from '@angular/core';
import { News } from '../modelos/News';
import { SubmissionService } from '../Submission-Service/submission.service';

@Component({
  selector: 'app-submission-controller',
  templateUrl: './submission-controller.component.html',
  styleUrls: ['./submission-controller.component.css'],
})
export class SubmissionControllerComponent implements OnInit {
  constructor(private submissionService: SubmissionService) {}

  // submission: News = new News();

  ngOnInit(): void {
    this.getSubmission();
  }

  public async getSubmission(): Promise<News> {
    // this.submission = new News();

    // await this.submissionService.getSubmission(id).then((data) => {
    //   this.submission: News = data;
    // });
    // return this.submission;
    let id: number = 53;
    let submission = await this.submissionService.getSubmission(id);
    return submission;
  }
}
