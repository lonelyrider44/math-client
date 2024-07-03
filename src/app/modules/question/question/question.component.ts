import { Component, Input, signal, effect } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { FormAction } from '../../base/form-action';

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
  public editAction: FormAction = FormAction.EDIT;
  public selected_questions: any[] = [];
  public selected: boolean = false;

  constructor(public questionService: QuestionService){}
  
  ngOnInit(){
    this.selected_questions = JSON.parse(localStorage.getItem('selected_questions') ?? '[]');
    this.selected = this.selected_questions.includes(this.question?.id);

  }
  select_question(){
    this.selected_questions = JSON.parse(localStorage.getItem('selected_questions') ?? '[]');
    this.selected = this.selected_questions.includes(this.question?.id);
    if(this.selected){
      this.selected_questions.splice(this.selected_questions.indexOf(this.question?.id),1);
      this.selected = false;
    }else{
      this.selected_questions.push(this.question?.id);
      this.selected = true;
    }
    localStorage.setItem('selected_questions',JSON.stringify(this.selected_questions))

    this.questionService.our_first_signal.set(this.selected_questions.length);
  //  localStorage.setItem() 
  }
}
