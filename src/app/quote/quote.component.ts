import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes =[
    new Quote(1,'Sometime we can feel a bit dull in the morning and we need to be our own sunshine energy','By:Stanley McShane',new Date(2018,7,8) ),
    new Quote(2,'Fake it till you make it','African Contemporary Quote',new Date(2018,7,10)),
    new Quote(3,'Create the highest vision possible for your life,because you become what you believe','By:Owen Muriithi-Professor',new Date(2018,7,10)),
    new Quote(4,'A great attitude becomes a great day which becomes a great month which becomes a great year and eventually becomes a great life','Quite an inspiring quote',new Date(2018,7,10)),
    
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
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  constructor() { }
  
  ngOnInit() {
  }
  
}
