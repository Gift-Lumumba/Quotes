import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes: string[];
    quote='Sometime we can feel a bit dull in the morning and we need to be our own sunshine energy';

  constructor(){
   
    this.quotes = ["Sometime we can feel a bit dull in the morning and we need to be our own sunshine energy","Fake it till you make it","Create the highest vision possible for your life,because you become what you believe","A great attitude becomes a great day which becomes a great month which becomes a great year and eventually becomes a great life"];
  }
}






