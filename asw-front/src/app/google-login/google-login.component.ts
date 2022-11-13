import { Component, OnInit } from '@angular/core';
import { GoogleApiService, UserInfo } from '../google-service/google-api.service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  UserInfo?: UserInfo

  constructor(private readonly googleApi: GoogleApiService) {
    googleApi.userProfileSubject.subscribe( info => {
      this.UserInfo = info
    })
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  signIn() {
    this.googleApi.signIn()
  }

  signOut() {
    this.googleApi.signOut()
  }

  ngOnInit(): void {}

}