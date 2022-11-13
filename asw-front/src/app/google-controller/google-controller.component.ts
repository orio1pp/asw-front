import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GoogleSigninService } from '../google-service/google-signin.service';

@Component({
  selector: 'app-google-controller',
  templateUrl: './google-controller.component.html',
  styleUrls: ['./google-controller.component.css']
})
export class GoogleControllerComponent implements OnInit {

  user: gapi.auth2.GoogleUser

  constructor(private signInService: GoogleSigninService, private ref: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.signInService.observable().subscribe( user => {
      this.user = user
      this.ref.detectChanges()
    })
  }

  signIn() {
    this.signInService.signIn()
  }

  signOut() {
    this.signInService.signOut()
  }

}
