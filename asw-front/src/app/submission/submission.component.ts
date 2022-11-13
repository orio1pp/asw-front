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
  comments: Comments[] = [];

  likeClass: string = 'not-liked';
  points: number = 0;
  likesPoints: [] = [];
  commentPoints: [] = [];

  constructor(
    private submissionControllerComponent: SubmissionControllerComponent
  ) {}

  ngOnInit(): void {
    let id: string | null = localStorage.getItem('submission');
    if (typeof id === 'string') {
      this.submissionControllerComponent.getSubmission(id).then((data) => {
        this.submission = data;
        let found: Boolean = false;
        this.likeClass = 'not-liked';
        if (this.submission.likedBy != null) {
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
        }
      });
      this.htmlcode();
    }
  }

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
  commentsection: string = '';
  getCommentSection() {
    return this.commentsection;
  }

  public async htmlcode() {
    let dynamicTemplate = `
    <div>
      <div>[SUPERCHRIS]</div>
    </div>`;

    let idNews: string | null = localStorage.getItem('submission');
    let commentaries;
    if (idNews !== null) {
      await this.submissionControllerComponent
        .getCommentaries(idNews)
        .then((data) => {
          commentaries = data;
        });
      commentaries = commentaries as unknown as Comments[];
      for (let i = commentaries.length - 1; i > -1; --i) {
        let comment;
        await this.submissionControllerComponent
          .getComments(commentaries[i].id.toString())
          .then((data) => {
            comment = data;
          });
        this.getHtml(comment as unknown as Comments, 0);
      }
      dynamicTemplate.replace('[SUPERCHRIS]', this.commentsection);
    }
    return dynamicTemplate;
  }

  private getHtml(comment: Comments, margin: number) {
    const left = 'com' + margin.toString();
    const rep = 'rep' + comment.id.toString();
    console.log(rep);
    if (comment.replies.length == 0) {
      this.commentsection += `<div class="comment ${left}">
                                <div class="comment-info">
                                  <div
                                    id="${comment.id}"
                                    alt="heart"
                                    #elem
                                    (click)="likeBtn(elem.id)"
                                    class="{{ likeClass.get(comment.id) }}"
                                  ></div>
                                  <p class="comment-points">${
                                    this.commentPoints[comment.id]
                                  } points</p>
                                  <p class="comment-user">
                                    by <span>${comment.user.username}</span>
                                  </p>
                                  <p class="comment-date">at ${comment.time}</p>
                                </div>
                                <div class="comment-body">
                                  <p class="comment-text">${comment.body}</p>
                                </div>
                                <div class="comment-reply">
                                  <a
                                    id=${rep}
                                    #elem
                                    class="reply-btn"
                                    (click)="goToReply(elem.id)"
                                    >reply
                                  </a>
                                </div>
                              </div>`;

      /*`
                          <div class="${left}">
                            <div class="reply comment">
                                <div class="comment-info">
                                    <p class="comment-points">0 points ${comment.id}</p>
                                    <p class="comment-user"> by <span class="comment-user-span">${comment.user.username}</span></p>
                                    <p class="comment-date"> at ${comment.time}</p>
                                </div>
                                    <div class="comment-body">
                                        <p>${comment.body}</p>
                                    </div>
                                </div>
                            </div>
                          </div>`;*/
    }

    for (let i = 0; comment.replies.length > i; i++) {
      this.getHtml(comment.replies[i], margin + 3);
    }
  }

  addComment() {
    let id: number;
  }
}
