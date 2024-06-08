import { Component, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() no:any = '';
  @Input() q:Question|null = null;
  @Input() question: Question|null = null;
  public edit:boolean = false;
}
