import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../modelos/News';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  public async getNewest(): Promise<News[]>{
    let news = await this.http.get<News[]>(environment.BASE_URL + "/newest").toPromise()
    return news as News[]
  }

}
