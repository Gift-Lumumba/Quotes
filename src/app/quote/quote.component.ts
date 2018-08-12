import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes = [
    new Quote(1, '"Sometime we can feel a bit dull in the morning and we need to be our own sunshine energy"', 'By:Johan McGinn',new Date(2018,7,6)),
    new Quote(2, '"Good,better,best.Never let it rest.Till your good is better and your better is best"', 'By:St.Jerome',new Date(2018,7,7)),
    new Quote(3, '"Create the highest vision possible for your life,because you become what you believe"', 'By:Owen Muriithi',new Date(2018,7,8)),
    new Quote(4, '"Failure will never overtake me if my determination to succeed is strong enough"', 'By:Og Mandino',new Date(2018,7,9)),
  ]
  
  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.quoteDate = new Date(quote.quoteDate)
    this.quotes.push(quote)

}
  
  constructor() { }
  
  ngOnInit() {
  }
}