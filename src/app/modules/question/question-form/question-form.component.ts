import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtService } from '../../base/router-ext.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Question, newQuestion, questionFormGroup } from '../question';
import { QuestionService } from '../question.service';
import { BaseForm } from '../../base/base-form.';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent extends BaseForm{
  @Input() question: Question = newQuestion();
  questionForm: FormGroup = questionFormGroup(this.fb);

  @Input() clearOnSubmit: boolean = false;
  @Output() success = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<string>();
  // @Input() question_id: any = null;
  constructor(
    public override fb: FormBuilder,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override routerExt: RouterExtService,
    protected override _snackBar: MatSnackBar,
    public questionService: QuestionService,
    protected _location: Location,
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);
    this.form = 
    this.questionForm = questionFormGroup(this.fb);
    this.service = this.questionService;
    // this.subjectForm = subjectFormGroup(this.fb, this.subject);
  }

  ngOnInit(): void {
    // this.loadFromUrl();

    console.log(this.question.text);
    console.log(this.clearOnSubmit)
  }


  override loadFromUrl() {
    super.loadFromUrl();
    
    // this.activatedRoute.data.subscribe(({ subject }) => {
    //   console.log(subject);
    //   if(subject){
    //     this.subject = subject;
    //   }
    // })
  }

  override get obj() { return this.question };

  override submitForm(): void {

    this.service?.update(this.obj?.id, this.form?.value,false).subscribe({
      next: (res:any) => {  this.success.emit() },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.form, error) }
    })
    
  }
  override goBack(): void {
    this.cancel.emit();
  }
}
