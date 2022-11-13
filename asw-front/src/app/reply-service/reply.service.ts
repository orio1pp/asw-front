import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comments } from '../modelos/Comments';

@Injectable({
  providedIn: 'root',
})
export class ReplyService {
  constructor(private http: HttpClient) {}

  public async postReply(): Promise<Comments[]> {
    let threads = await this.http
      .get<Comments[]>(
        environment.BASE_URL +
          '/comment/user/' +
          localStorage.getItem('username')
      )
      .toPromise();
    return threads as Comments[];
  }
}
