import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.component.html',
  styleUrls: ['./quotedetail.component.css']
})
export class QuotedetailComponent implements OnInit {

  @Input() quote: Quote;

  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  upvote: number = 0
  downvote: number = 0
  upclick() {
    this.upvote++;
  }
  downclick() {
    this.downvote++;
  }

  constructor() { }

  ngOnInit() {
  }

}
