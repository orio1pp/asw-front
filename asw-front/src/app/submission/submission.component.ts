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
  comments: Comments[] = []
  likeClass: string = 'not-liked';
  points: number = 0;
  constructor(
    private submissionControllerComponent: SubmissionControllerComponent
  ) { }

  ngOnInit(): void {
    this.htmlcode()
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

  loadSubmissions() { }

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
  commentsection: string = "";
  getCommentSection(){
    return this.commentsection
  }
  public async htmlcode() {
    let dynamicTemplate = `
    <div>
      <div>[SUPERCHRIS]</div>
    </div>
  `
    let idNews = localStorage.getItem("idNews");
    idNews = "53"
    let commentaries;
    await this.submissionControllerComponent.getCommentaries(idNews).then(data =>{
      commentaries = data
    })
    commentaries = commentaries as unknown as Comments[]
    for(let i = 0; commentaries.length>i; i++){
      let comment;
      await this.submissionControllerComponent.getComments(commentaries[i].toString()).then(data => {
        comment = data
      })
      this.getHtml(comment as unknown as Comments)
    }
    dynamicTemplate.replace('[SUPERCHRIS]', this.commentsection)
    return dynamicTemplate;
  }


  private getHtml(comment: Comments) {
    if (comment.replies.length == 0) {
      this.commentsection += `<div class="reply comment">
      <div class="comment-info">
          <p class="comment-points">0 points ${comment.id}</p>
          <p class="comment-user"> by ${comment.user.username}</p>
          <p class="comment-date"> at ${comment.time}</p>
      </div>
          <div class="comment-body">
              <p class="comment-date">${comment.body}</p>
          </div>
      </div>
  </div>`;
    }

    for (let i = 0; comment.replies.length > i; i++) {
      this.getHtml(comment.replies[i])
    }
  }

  addComment() {
    let id: number;
  }
}
