import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes = [
    new Quote(1,"Sometime we can feel a bit dull in the morning and we need to be our own sunshine energy.","Author:Johan McGinn","Travies Scott",0,0,new Date(2018,7,5)),
    new Quote(2,"Good,better,best.Never let it rest.Till your good is better and your better is best.","Author:St.Jerome","Jack Janiels",0,0,new Date(2018,7,7)),
    new Quote(3,"Create the highest vision possible for your life,because you become what you believe.","Author:Owen Muriithi","Edith",0,0,new Date(2018,7,8)),
    new Quote(4,"Failure will never overtake me if my determination to succeed is strong enough.","Author:Og Mandino","Adam Hunter",0,0,new Date(2018,7,10)),
    
  ];
  toogleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    this.quotes[index].showSubmit= !this.quotes[index].showSubmit;
  }
  upvote(index){
    this.quotes[index].upvotes++;
  }
  downvote(index){
    this.quotes[index].downvotes++;
  }
  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
  addNewQuote(quote){
    this.quotes.push(quote)
    
  }
  
  constructor() { }
  
  ngOnInit() {
  }
}