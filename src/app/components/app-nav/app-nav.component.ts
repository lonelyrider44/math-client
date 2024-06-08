import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {

  @ViewChild('drawer') sidenav:any; 
  opened: boolean = true;
  title: string = '';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public titleService: Title) {}

  ngOnInit(){
    // this.title = this.titleService.getTitle();
  }
  ngDoCheck(){
    
    this.title = this.titleService.getTitle();
  }
  listItemClick(){
    if(this.isHandset$){
      this.sidenav.close()
    }
  }

}
