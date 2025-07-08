import { FormBuilder, FormGroup,FormControl,Validators } from "@angular/forms";
import { Subject } from "../subject/subject";
import { Chapter } from "../chapter/chapter";
export interface Question {
    id ?: number,
    text ?: string,
    answer ?: string,
    pattern ?: string,
    pattern_data ?: any,
    subject_id ?: number,
    chapter_id ?: number,
    document_id ?: number,

    subject?: Subject,
    chapter?: Chapter
}

export function newQuestion(): Question {
    return {
        text: '',
        // level: ''
    };
}
export function copyQuestion(question: Question): Question {
    return {
        text : question.text,
        // answer: question.answer,
        pattern: question.pattern,
        pattern_data: question.pattern_data,
        subject_id: question.subject_id,
        chapter_id: question.chapter_id,
        document_id: question.document_id
    }
}
export function questionFormGroup(fb: FormBuilder): FormGroup {
    return new FormGroup({
        text: new FormControl('',Validators.required),
        answer: new FormControl('',Validators.required),
        subject_id: new FormControl(''),
        chapter_id: new FormControl(''),
        document_id: new FormControl(''),
    })
    return fb.group({
        text: [''],
        answer: [''],
        subject_id: [''],
        chapter_id: [''],
        document_id: [''],
    });
}
