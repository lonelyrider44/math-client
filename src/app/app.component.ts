import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'math-client';
  
  ngOnInit(){
    // alert($('#body-pd').length)
  }
}
