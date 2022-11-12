import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../modelos/News';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(private http: HttpClient) { }

  public async getSubmission(id: number): Promise<News> {
    let submission = await this.http.get<News>(environment.BASE_URL + "/news" + id).toPromise()
    return submission as News
  }
}
