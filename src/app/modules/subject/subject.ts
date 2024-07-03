import { FormBuilder, FormGroup } from "@angular/forms";
import { Question } from "../question/question";
import { Chapter } from "../chapter/chapter";

export interface Subject {
    id?: number,
    name: string,
    level: string,

    chapters?: Chapter[]
    questions?: Question[]
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