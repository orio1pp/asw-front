import { Component, OnInit } from '@angular/core';
import { News } from '../modelos/News';
import { ProfileControllerComponent } from '../profile-controller/profile-controller.component';
@Component({
  selector: 'app-voted-submissions-view',
  templateUrl: './voted-submissions-view.component.html',
  styleUrls: ['./voted-submissions-view.component.css']
})
export class VotedSubmissionsViewComponent implements OnInit {

  constructor(private profileControllerComponent:ProfileControllerComponent) { }
  news: News[] = [];
  ngOnInit(): void {
    this.getLikedSubmissions()
  }

  public getLikedSubmissions(){
    let username = localStorage.getItem("username");
    username = "oriolportellpareras"
    this.profileControllerComponent.getLikedSubmissions(username).then(data =>{
      this.news = data
      console.log(data)
    })
  }

}
