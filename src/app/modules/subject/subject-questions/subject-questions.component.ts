import { Component } from '@angular/core';
import { Question } from '../../question/question';
import { QuestionService } from '../../question/question.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from '../subject';

@Component({
    selector: 'app-subject-questions',
    templateUrl: './subject-questions.component.html',
    styleUrls: ['./subject-questions.component.scss'],
    standalone: false
})
export class SubjectQuestionsComponent {
  public subject: Subject;
  public questions: Question[] = [];

  constructor(public questionService:QuestionService, private route: ActivatedRoute){
    // this.subject = this.route.snapshot.data.subject;
    // this.route.snapshot.parent.data
    this.subject = this.route.snapshot.parent?.data['subject'];
    // console.log(this.subject)
    // console.log(this.route.snapshot.parent?.data);
  }

  ngOnInit(){
    this.questionService.get({subject_id: this.subject.id}).subscribe(res => this.questions = res);
  }
}
