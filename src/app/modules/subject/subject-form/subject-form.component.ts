import { Component } from '@angular/core';
import { BaseForm } from '../../base/base-form.';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, newSubject, subjectFormGroup } from '../subject';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtService } from '../../base/router-ext.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectService } from '../subject.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-subject-form',
    templateUrl: './subject-form.component.html',
    styleUrls: ['./subject-form.component.scss'],
    standalone: false
})
export class SubjectFormComponent extends BaseForm {
  subject: Subject = newSubject();
  subjectForm: FormGroup = subjectFormGroup(this.fb);

  constructor(
    public override fb: FormBuilder,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override routerExt: RouterExtService,
    protected override _snackBar: MatSnackBar,
    // public kampService: KampService,
    // public ortopedijaService: OrtopedijaService,
    // public mestoService: MestoService,
    public subjectService: SubjectService,
    protected _location: Location,
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);
    // this.obj = newKamp();
    this.form = 
    this.subjectForm = subjectFormGroup(this.fb);
    this.service = this.subjectService;
    // this.subjectForm = subjectFormGroup(this.fb, this.subject);
  }

  ngOnInit(): void {
    this.loadFromUrl();
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

  override get obj() { return this.subject };
}
