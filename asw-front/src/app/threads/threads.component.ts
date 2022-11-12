import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Comments } from '../modelos/Comments';
import { ThreadsControllerComponent } from '../threads-controller/threads-controller.component';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css'],
})
export class ThreadsComponent implements OnInit {
  threads: Comments[] = [];

  likeClass: Map<number, string> = new Map<number, string>();
  points: Map<number, number> = new Map<number, number>();

  constructor(
    private threadsControllerComponent: ThreadsControllerComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.threadsControllerComponent.getThreads().then((data) => {
      this.threads = data;

      for (let i = 0; i < this.threads.length; i++) {
        let found: Boolean = false;
        let id: number = this.threads[i].id;
        this.likeClass.set(id, 'not-liked');
        this.points.set(id, this.threads[i].likedBy.length);

        for (let j = 0; j < this.threads[i].likedBy.length && !found; j++) {
          if (
            this.threads[i].likedBy[j].username ===
            localStorage.getItem('username')
          ) {
            this.likeClass.set(id, 'liked');
            found = true;
          }
        }
      }
    });
  }

  goToReply(idstr: string) {
    let id: string = '';
    for (let i = 0; i < idstr.length; ++i) {
      if (i > 2) id += idstr[i];
    }
    localStorage.setItem('reply', id);
    this.router.navigate(['reply']);
  }

  async likeBtn(id: string) {
    let jsonSubmit = {
      username: localStorage.getItem('username'),
    };

    const response = await fetch(
      environment.BASE_URL + '/comment/' + id + '/like',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonSubmit),
      }
    );

    let numid: number = +id;

    this.likeClass.set(
      numid,
      this.likeClass.get(numid) == 'liked' ? 'not-liked' : 'liked'
    );

    let pointsDiff: number = this.likeClass.get(numid) == 'liked' ? 1 : -1;
    let currentPoints: number | undefined = this.points.get(numid);
    if (typeof currentPoints === 'number') {
      this.points.set(numid, currentPoints + pointsDiff);
    }
  }
}
