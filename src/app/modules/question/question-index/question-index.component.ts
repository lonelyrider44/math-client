import { Component } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
    selector: 'app-question-index',
    templateUrl: './question-index.component.html',
    styleUrls: ['./question-index.component.scss'],
    standalone: false
})
export class QuestionIndexComponent {

  questions: Question[] = [];

  constructor(public questionService: QuestionService){

  }

  ngOnInit(){
    this.questionService.all().subscribe(res => {
      this.questions = res;
    })
  }
}
