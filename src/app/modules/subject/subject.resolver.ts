import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SubjectService } from './subject.service';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectResolver  {
  constructor(private subjectService: SubjectService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Subject> {
    // console.log('subject resolver');
    return this.subjectService.find(route.paramMap.get('id'));
    // return of(true);
  }
}
