import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent implements OnInit {
  replyText: string = '';
  replyId: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.replyId = localStorage.getItem('reply');
  }

  handleChangeReply(value: string) {
    this.replyText = value;
  }

  async addReply(): Promise<void> {
    let jsonSubmit = {
      user: {
        username: localStorage.getItem('username'),
      },
      body: this.replyText,
    };

    let id: string | null = localStorage.getItem('reply');

    console.log(environment.BASE_URL + '/news/' + id + '/reply');
    const response = await fetch(
      environment.BASE_URL + '/news/' + id + '/reply',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonSubmit),
      }
    );
    this.router.navigate(['']);
  }
}
