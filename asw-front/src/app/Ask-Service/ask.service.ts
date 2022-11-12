import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../modelos/News';

@Injectable({
  providedIn: 'root'
})
export class AskService {
  constructor(private http: HttpClient) { }

  public async getAsk(): Promise<News[]> {
    let ask = await this.http.get<News[]>(environment.BASE_URL + "/ask").toPromise();
    return ask as News[];
  }
}
