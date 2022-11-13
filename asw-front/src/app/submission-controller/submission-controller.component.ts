import { Component, OnInit } from '@angular/core';
import { Comments } from '../modelos/Comments';
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
  id: number = -1;

  ngOnInit(): void {
    let idstr: string | null = localStorage.getItem('submission');
    if (typeof idstr === 'string') this.id = +idstr;
    this.getSubmission();
  }

  public async getSubmission(): Promise<News> {
    // this.submission = new News();

    // await this.submissionService.getSubmission(id).then((data) => {
    //   this.submission: News = data;
    // });
    // return this.submission;
    let submission = await this.submissionService.getSubmission(this.id);
    return submission;
  }

  public async getComments(idNews:string): Promise<Comments>{
    let comment;
    await this.submissionService.getComments(idNews).then(data =>{
      comment = data
    })
    return comment as unknown as Comments;
  }
  public async getCommentaries(idNews:string):Promise<number[]>{
    let commentaries;
    await this.submissionService.getCommentaries(idNews).then(data =>{
      commentaries = data
    })
    return commentaries as unknown as number[];
  }
}
