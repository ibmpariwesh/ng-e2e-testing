import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  totalvotes = 0;
  constructor() { }

 upvote(){

  this.totalvotes++;
 }

 downvote(){
   this.totalvotes--;
 }

}
