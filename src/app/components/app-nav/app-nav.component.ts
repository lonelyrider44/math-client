import { Component, ViewChild, signal, effect} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { QuestionService } from 'src/app/modules/question/question.service';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.scss'],
    standalone: false
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


  constructor(private breakpointObserver: BreakpointObserver, public titleService: Title, public questionService: QuestionService) {
    effect(() => {
      console.log('called', this.questionService.our_first_signal());
    });
  }

  // effect(() => {
  //   if (this.isAuthenticated()) {
  //    console.log('User is authenticated. Redirecting to dashboard…');
  // // Code to redirect to the dashboard can be added here
  //   } else {
  //     console.log('User is not authenticated. Redirecting to login page…');
  // // Code to redirect to the login page can be added here
  //  }
  // });
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
