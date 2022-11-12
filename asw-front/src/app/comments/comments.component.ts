import { Component, Input, OnInit } from '@angular/core';
export class CommentNode {
  text:string ='';
  replys:CommentNode[] = [];
  isOpen: boolean = false;
  constructor(text:string){
    this.text = text;
  }
  addNewReply(newComment:CommentNode) {
    if(newComment.text){
      this.replys.push(newComment);
    }
  }
}
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  comments:CommentNode[] = [];
  @Input()
  isNotReply:boolean = true;
  text:string='';
  text2:string='';

  constructor(){}
  ngOnInit(){}

  addComment(text:string) {
    if (text) {
      this.comments.push(new CommentNode(text));
    }
    this.text2="";
  }
  addReply(comment:CommentNode) {
    comment.addNewReply(new CommentNode(this.text));      
    this.cancel(comment);   
  }
  cancel(comment:CommentNode) {
    comment.isOpen = false;
    this.text="";   
  }
  openCommentText(comment:CommentNode) {
    comment.isOpen = true;
  }
}
