import { Component, OnInit } from '@angular/core';
import { AskControllerComponent } from '../ask-controller/ask-controller.component';
import { News } from '../modelos/News';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  ask : News[] = [];

  constructor(private askControllerComponent: AskControllerComponent) { }
  
  ngOnInit(): void {
     this.askControllerComponent.getAsk().then(data => {
      this.ask = data
      console.log(data);
     })
  }
  

}
