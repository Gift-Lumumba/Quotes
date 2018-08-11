
import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  quotes = [
    new Quote(1, 'Sometime we can feel a bit dull in the morning and we need to be our own sunshine energy', 'By Johan McGinn',new Date(2018,8,6)),
    new Quote(2, 'Fake it till you make it', 'By Thomas Daniels',new Date(2018,8,7)),
    new Quote(3, 'Create the highest vision possible for your life,because you become what you believe', 'By Owen Muriithi',new Date(2018,8,8)),
    new Quote(4, 'Only I can change my life.No one can do it for me', 'By Didier Deschamps',new Date(2018,8,9)),
  ]
}







