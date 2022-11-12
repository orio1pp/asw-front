import { Component, OnInit } from '@angular/core';
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

  constructor(private threadsControllerComponent: ThreadsControllerComponent) {}

  ngOnInit(): void {
    this.threadsControllerComponent.getThreads().then((data) => {
      this.threads = data;

      for (let i = 0; i < this.threads.length; i++) {
        let found: Boolean = false;
        let id: number = this.threads[i].id;
        this.likeClass.set(id, 'not-liked');

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

  goToReply(id: string) {}

  likeBtn(id: any) {}
}
