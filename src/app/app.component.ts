import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes =[
      new Quote(1,'Sometime we can feel a bit dull in the morning and we need to be our own sunshine energy'),
      new Quote(2,'Fake it till you make it'),
      new Quote(3,'Create the highest vision possible for your life,because you become what you believe'),
      new Quote(4,'A great attitude becomes a great day which becomes a great month which becomes a great year and eventually becomes a great life'),
      
    ]

  constructor(){
   
  }
}






