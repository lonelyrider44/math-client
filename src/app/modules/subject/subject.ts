import { FormBuilder, FormGroup } from "@angular/forms";

export interface Subject {
    id?: number,
    name: string,
    level: string
}

export function newSubject(): Subject {
    return {
        name: '',
        level: ''
    };
}
export function subjectFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
        name: [''],
        level: [''],
    });
}