import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor(private http: HttpClient) { }
  public submit(news: any){
    this.http.post<any>(environment.BASE_URL + "/submit", news).subscribe()
  }
}
