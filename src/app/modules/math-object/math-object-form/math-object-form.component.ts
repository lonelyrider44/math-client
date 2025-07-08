import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseForm } from '../../base/base-form.';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormAction } from '../../base/form-action';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtService } from '../../base/router-ext.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from '../../question/question.service';
import { SubjectService } from '../../subject/subject.service';
import { ChapterService } from '../../chapter/chapter.service';
import { MathObject, mathObjectFormGroup, newMathObject } from '../math-object';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MathObjectService } from '../math-object.service';

@Component({
    selector: 'app-math-object-form',
    standalone: true,
    imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatLabel,
    MatIcon,
    MatOptionModule
],
    templateUrl: './math-object-form.component.html',
    styleUrl: './math-object-form.component.scss'
})
export class MathObjectFormComponent extends BaseForm{
  // textFormControl: FormControl;
  // questionForm: FormGroup;
  mathObjectForm: FormGroup;
  //  = questionFormGroup(this.fb);

  @Input() action: FormAction | undefined = FormAction.CREATE;
  @Input() mathObject: MathObject = newMathObject();
  @Input() clearOnSubmit: boolean = false;
  // @Input() subject: Subject | null = null;

  @Output() success = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<string>();

  // public subjects: Subject[] | undefined;
  // public chapters: Chapter[] | undefined;
  // @Input() question_id: any = null;
  constructor(
    public override fb: FormBuilder,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override routerExt: RouterExtService,
    protected override _snackBar: MatSnackBar,
    public mathObjectService: MathObjectService,
    protected _location: Location,
    protected subjectService: SubjectService,
    protected chapterService: ChapterService,
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);
    this.form =
      this.mathObjectForm
      = mathObjectFormGroup(this.fb);
    this.service = this.mathObjectService;
  }

  ngOnInit(): void {
    // this.form?.controls['document_id'].setValue(this.document?.id);
  }
  ngOnChanges(){
    
  }

  override loadFromUrl() {
    super.loadFromUrl();
  }

  override get obj() { return this.mathObject };

  override submitForm(): void {
    // this.form?.controls['text'].setValue(this..text);
    switch (this.action) {
      case FormAction.CREATE:
        this.service?.store(this.form?.value, false).subscribe({
          next: (res: any) => {this.success.emit() },
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





  get inputs() {
    return this.mathObjectForm.get('inputs') as FormArray;
  }
  get outputs() {
    return this.mathObjectForm.get('outputs') as FormArray;
  }

  addInput() {
    this.inputs.push(this.fb.control('', Validators.required));
  }

  removeInput(index: number) {
    this.inputs.removeAt(index);
  }

  onSubmit() {
    console.log(this.mathObjectForm.value);
  }
}
