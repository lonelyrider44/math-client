import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtService } from '../../base/router-ext.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Question, newQuestion, questionFormGroup } from '../question';
import { QuestionService } from '../question.service';
import { BaseForm } from '../../base/base-form.';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from '../../subject/subject';
import { FormAction } from '../../base/form-action';
import { SubjectService } from '../../subject/subject.service';
import { Chapter } from '../../chapter/chapter';
import { ChapterService } from '../../chapter/chapter.service';
import { Document } from '../../document/document';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent extends BaseForm {
  // textFormControl: FormControl;
  questionForm: FormGroup;
  //  = questionFormGroup(this.fb);

  @Input() action: FormAction | undefined = FormAction.CREATE;
  @Input() question: Question = newQuestion();
  @Input() clearOnSubmit: boolean = false;
  @Input() document: Document | null = null;
  @Input() subject: Subject | null = null;

  @Output() success = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<string>();

  public subjects: Subject[] | undefined;
  public chapters: Chapter[] | undefined;
  // @Input() question_id: any = null;
  constructor(
    public override fb: FormBuilder,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override routerExt: RouterExtService,
    protected override _snackBar: MatSnackBar,
    public questionService: QuestionService,
    protected _location: Location,
    protected subjectService: SubjectService,
    protected chapterService: ChapterService,
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);
    this.form =
      this.questionForm
      = questionFormGroup(this.fb);
    this.service = this.questionService;
    // this.subjects = this.subjectService.all();
    // this.textFormControl = new FormControl('')
    // this.textFormControl = this.questionForm.controls['text'];
    // this.subjectForm = subjectFormGroup(this.fb, this.subject);
  }

  ngOnInit(): void {

    // console.table(this.question);
    // this.loadFromUrl();

    // console.log(this.question.text);
    this.form?.controls['document_id'].setValue(this.document?.id);
    // console.log(this.clearOnSubmit)
  }
  ngOnChanges() {
    this.subjectService.all().subscribe({
      next: (res) => {
        this.subjects = res

        this.subjectChanged({});
      }
    })

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
    this.form?.controls['text'].setValue(this.question.text);
    switch (this.action) {
      case FormAction.CREATE:
        this.service?.store(this.form?.value, false).subscribe({
          next: (res: any) => { this.success.emit() },
          error: (error: HttpErrorResponse) => { this.submitFormFailed(this.form, error) }
        })
        break;
      case FormAction.EDIT:
        this.service?.update(this.obj?.id, this.form?.value, false).subscribe({
          next: (res: any) => { this.success.emit() },
          error: (error: HttpErrorResponse) => { this.submitFormFailed(this.form, error) }
        })
        break;
      case FormAction.DELETE:
        break;
    }
  }
  override goBack(): void {
    this.cancel.emit();
  }

  subjectChanged($event: any) {
    //     console.log($event.value);
    // console.log(this.question.subject_id);
    this.chapterService.index({ subject_id: this.question.subject_id ?? -1 }).subscribe(res => {
      this.chapters = res;
    })
  }

  tinyMceInit = {
    height: '200px',
    menubar: false, 
    plugins: 'lists advlist link image table code help wordcount', 
    toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | image | table | tablemergecells', 
    // images_upload_url: 'http://api.local.math/upload-image',
    file_picker_types: 'image',
    file_picker_callback: (callback: any, value: string, meta: any) => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.onchange = () => {
        const file = input.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            callback(reader.result as string, { alt: file.name });
          };
          reader.readAsDataURL(file);
        }
      };
      input.click();
    }
  };
  // tinyMceConfig = {
  //   selector: 'textarea',
  //   plugins: 'image',
  //   toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | image',
  //   images_upload_url: '/upload-image',
  //   automatic_uploads: true,
    
  // };

}
