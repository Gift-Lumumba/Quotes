import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  quotes =[
    new Quote(1,'Sometime we can feel a bit dull in the morning and we need to be our own sunshine energy','By:Stanley McShane',new Date(2018,8,10) ),
    new Quote(2,'Fake it till you make it','African Contemporary Quote',new Date(2018,5,6)),
    new Quote(3,'Create the highest vision possible for your life,because you become what you believe','By:Owen Muriithi-Professor',new Date(2018,8,10)),
    new Quote(4,'A great attitude becomes a great day which becomes a great month which becomes a great year and eventually becomes a great life','Quite an inspiring quote',new Date(2018,8,10)),
  ]
  
  constructor(){
    
  }
}






