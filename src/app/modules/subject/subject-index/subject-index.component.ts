import { Component } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-subject-index',
  templateUrl: './subject-index.component.html',
  styleUrls: ['./subject-index.component.scss']
})
export class SubjectIndexComponent {
  subjects: Subject[] = [];

  constructor(public subjectService: SubjectService, public titleService: Title){
  }
  ngOnInit(){
    this.titleService.setTitle('Subjects');
    this.subjectService.all().subscribe(data => this.subjects = data)
  }
}
