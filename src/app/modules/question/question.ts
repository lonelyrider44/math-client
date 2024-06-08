import { FormBuilder, FormGroup } from "@angular/forms";
export interface Question {
    id ?: number,
    text ?: string,
    subject_id ?: number
}

export function newQuestion(): Question {
    return {
        text: '',
        // level: ''
    };
}
export function questionFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
        text: [''],
        subject_id: [''],
    });
}
