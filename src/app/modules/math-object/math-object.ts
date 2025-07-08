import { FormBuilder, FormGroup,FormControl,Validators, FormArray } from "@angular/forms";
export interface MathObject {
    id?: number,
    name: string,
    display_expr?: string,
    display_expr_latex?: string,
    inputs?: any[],
    outputs?: any[],
    values?: any[]
}

export function newMathObject(): MathObject {
    return {
        name: '',
        // level: ''
    };
}
export function mathObjectFormGroup(fb: FormBuilder): FormGroup {
    return new FormGroup({
        name: new FormControl('',Validators.required),
        display_expr: new FormControl('',null),
        display_expr_latex: new FormControl('',null),
        inputs: new FormArray([
            new FormGroup({
                name: new FormControl('',null),
                expr: new FormControl('',null),
                latex_expr: new FormControl('',null)
            }),
            new FormGroup({
                name: new FormControl('',null),
                expr: new FormControl('',null),
                latex_expr: new FormControl('',null)
            }),
            new FormGroup({
                name: new FormControl('',null),
                expr: new FormControl('',null),
                latex_expr: new FormControl('',null)
            }),
        ]),
        outputs: new FormArray([
        ]),
    })
}
