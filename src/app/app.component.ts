
import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  quotes = [
    new Quote(1, '"Sometime we can feel a bit dull in the morning and we need to be our own sunshine energy"', 'By:Johan McGinn',new Date(2018,7,6)),
    new Quote(2, '"Good,better,best.Never let it rest.Till your good is better and your better is best"', 'By:St.Jerome',new Date(2018,7,7)),
    new Quote(3, '"Create the highest vision possible for your life,because you become what you believe"', 'By:Owen Muriithi',new Date(2018,7,8)),
    new Quote(4, '"Failure will never overtake me if my determination to succeed is strong enough"', 'By:Og Mandino',new Date(2018,7,9)),
  ]
}







