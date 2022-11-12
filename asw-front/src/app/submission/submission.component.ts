import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../modelos/Comments';
import { News } from '../modelos/News';
import { User } from '../modelos/User';
import { SubmissionControllerComponent } from '../submission-controller/submission-controller.component';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css'],
})
export class SubmissionComponent implements OnInit {
  submission: News;
  comments:Comments[] = []
  likeClass: string = 'not-liked';
  points: number = 0;
  constructor(
    private submissionControllerComponent: SubmissionControllerComponent
  ) {}

  ngOnInit(): void {
    this.submissionControllerComponent.getSubmission().then((data) => {
      this.submission = data;

      let found: Boolean = false;
      this.likeClass = 'not-liked';
      for (let i = 0; i < this.submission.likedBy.length && !found; i++) {
        if (
          this.submission.likedBy[i].username ===
          localStorage.getItem('username')
        ) {
          found = true;
          this.likeClass = 'liked';
        }
      }
      this.points = this.submission.likedBy.length;
    });
  }

  ngOnChange(): void {}

  loadSubmissions() {}

  async likeBtn(btnid: string) {
    let jsonSubmit = {
      username: localStorage.getItem('username'),
    };

    const response = await fetch(
      environment.BASE_URL + '/news/' + btnid + '/like',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonSubmit),
      }
    );
    this.likeClass = this.likeClass == 'liked' ? 'not-liked' : 'liked';
    this.points += this.likeClass == 'liked' ? 1 : -1;
  }

  public htmlcode(){
    let dynamicTemplate = `
    <div>
      <div>[SUPERCHRIS]</div>
    </div>
  `;
    let code: string = this.getHtmlCommentaries()
    dynamicTemplate.replace('[SUPERCHRIS]',code )
    return dynamicTemplate;
  }
  
  private getHtmlCommentaries():string{
    return "caca";
  }

  addComment() {
    let id: number;
  }
}
