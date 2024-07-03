import { Component } from '@angular/core';
import { BaseForm } from '../../base/base-form.';
import { Document, documentFormGroup, newDocument } from '../document';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtService } from '../../base/router-ext.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DocumentService } from '../document.service';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { FormAction } from '../../base/form-action';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.scss']
})
export class DocumentFormComponent extends BaseForm {
  document: Document = newDocument();
  documentForm: FormGroup = documentFormGroup(this.fb);
  new_file:any = null;
  public questionFormAction: FormAction = FormAction.CREATE;
  
  constructor(
    public override fb: FormBuilder,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override routerExt: RouterExtService,
    protected override _snackBar: MatSnackBar,
    // public kampService: KampService,
    // public ortopedijaService: OrtopedijaService,
    // public mestoService: MestoService,
    public documentService: DocumentService,
    protected _location: Location,
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);
    // this.obj = newKamp();
    this.form = 
    this.documentForm = documentFormGroup(this.fb);
    this.service = this.documentService;
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

  onImagePicked(event: Event) {
    var file = (event.target as HTMLInputElement); // Here we use only the first file (single file)
    if(file && file.files){
      console.log('new file')
      this.new_file = file.files[0];
    }
    

    // formData.append("data", JSON.stringify(data));
    // this.http.post(path, formData).subscribe(
      //   (r)=>{console.log('got r', r)}
      // )
      // this.documentForm.patchValue(formData);
    }
    onFileSelect(event: Event) {
      const target = (event.target as HTMLInputElement);
      if(target  && target.files){
        const files = target.files;
        const file = files[0];
        console.log('file exists');
        console.log(file);
        this.documentForm.get('file')?.setValue(file);
        // if ((event.target as HTMLInputElement).files) {
        //   const file = (event.target as HTMLInputElement).files[0];
        //   this.uploadForm.get('profile').setValue(file);
        // }

      }
    }
    
    override store() {
      const formData = new FormData();
      formData.append('file', this.documentForm.get('file')?.value);
      console.log(this.documentForm.get('file')?.value)
      console.log(this.documentForm.value)
      this.service?.store(formData,false).subscribe({
      next: (res:any) => { this.router.navigateByUrl(this.routerExt.getPreviousUrl()) },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.form, error) }
    })
  }
  override get obj() { return this.document };
}
