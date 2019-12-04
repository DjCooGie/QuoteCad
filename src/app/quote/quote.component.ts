import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  viewDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  } 


  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }


  quotes:Quote[] = [
    new Quote(1, 'The journey to Heaven starts from hell.', 'Sam Tomashi', 'Christine', new Date(2019,12,1)),
    new Quote(2, 'Don’t worry about failures, worry about the chances you miss when you don’t even try.', 'Evans Nyambane', 'Yommie', new Date(2019,12,2)),
  ];

  constructor() { }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  ngOnInit() {
  }

}
