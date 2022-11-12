import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../modelos/News';
import { User } from '../modelos/User';
import { Comments } from '../modelos/Comments';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  public async getProfile(username: string): Promise<User>{
    let news = await this.http.get<User>(environment.BASE_URL + "/user?username=" + username).toPromise()
    return news as User;
  }

  public submit(user: any){
    this.http.post<any>(environment.BASE_URL + "/userk",user).subscribe()
  }

  public async getSubmissions(username: string): Promise<News[]>{
    let news = await this.http.get<News[]>(environment.BASE_URL + "/news/user?username=" + username).toPromise()
    return news as News[];
  }

  public async getComments(username:string): Promise<Comments[]>{
    let comments = await this.http.get<Comments[]>(environment.BASE_URL + "/comment/user/?username=" + username).toPromise()
    return comments as Comments[];
  }

  public async getVotedNews(username: string): Promise<News[]>{
    let news = await this.http.get<News[]>(environment.BASE_URL + "/news/liked?username=" + username).toPromise()
    return news as News[];
  }

  public async getVotedComments(username:string): Promise<Comments[]>{
    let comments = await this.http.get<Comments[]>(environment.BASE_URL + "/comments/liked?username=" + username).toPromise()
    return comments as Comments[];
  }

}
