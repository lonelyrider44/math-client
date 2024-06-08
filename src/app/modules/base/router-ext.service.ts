
import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

 /** A router wrapper, adding extra functions. */
 @Injectable({
  providedIn: 'root'
})
export class RouterExtService {
  
  private previousUrl: string|undefined = undefined;
  private currentUrl: string|undefined = undefined;

  constructor(private router : Router) {
    
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(this.currentUrl != event.url){
          // console.log('prev:', event.url);
          this.previousUrl = this.currentUrl;
          this.currentUrl = event.url;
        }
      };
    });
  }

  public getPreviousUrl(){
    return this.previousUrl ?? '/';
  }    
}