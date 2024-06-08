import { HttpErrorResponse } from "@angular/common/http";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { MyErrorStateMatcher } from "./my-error-state-matcher";
import { RouterExtService } from "./router-ext.service";

export class BaseForm {
  matcher = new MyErrorStateMatcher();

  action_create: boolean = false;
  action_update: boolean = false;
  action_delete: boolean = false;

  form: FormGroup|undefined;
  service: any;
  errors: any;
  // obj: any;

  constructor(
    public fb: FormBuilder,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected routerExt: RouterExtService,
    protected _snackBar: MatSnackBar
  ) { }

  get obj():any { return null; }
  store() {
    console.log(this.form?.value)
    this.service?.store(this.form?.value,false).subscribe({
      next: (res:any) => { this.router.navigateByUrl(this.routerExt.getPreviousUrl()) },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.form, error) }
    })
  }
  update() {
    this.service?.update(this.obj?.id, this.form?.value).subscribe({
        next: (res:any) => { this.router.navigateByUrl(this.routerExt.getPreviousUrl()) },
        error: (error: HttpErrorResponse) => { this.submitFormFailed(this.form, error) }
      })
  }
  delete() {
    this.service.delete(this.obj?.id).subscribe({
      next: (res:any) => { this.router.navigateByUrl(this.routerExt.getPreviousUrl()) },
      error: (error: HttpErrorResponse) => { this.submitFormFailed(this.form, error) }
    })
  }
  submitForm() {
    console.log('Submit form');
    console.log(this.action_create);
    if (this.action_create) this.store();
    if (this.action_update) this.update();
    if (this.action_delete) this.delete();
    
  }

  submitFormFailed(form: FormGroup|undefined, error: HttpErrorResponse) {
    // this.errors = error.error.errors;
    // console.log(error.error);
    if (error.status === 422) {
      this.errors = error.error.errors;
      Object.keys(error.error.errors).forEach(prop => {
        const formControl = form?.get(prop);
        if (formControl) {
          formControl.setErrors({
            serverError: error.error.errors[prop]
          });
        }
      });
    } else {
      this._snackBar.open(error.error.message, 'OK')
    }
  }
  goBack() {
    this.router.navigateByUrl(this.routerExt.getPreviousUrl())
  }
  loadFromUrl() {
    this.action_create = this.activatedRoute.snapshot.url.map((value: UrlSegment, index: number, array: UrlSegment[]) => {
      return value.path;
    }).includes('new');
    this.action_update = this.activatedRoute.snapshot.url.map((value: UrlSegment, index: number, array: UrlSegment[]) => {
      return value.path;
    }).includes('edit');
    this.action_delete = this.activatedRoute.snapshot.url.map((value: UrlSegment, index: number, array: UrlSegment[]) => {
      return value.path;
    }).includes('delete');

  }
}