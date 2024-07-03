import { FormBuilder, FormGroup,FormControl,Validators } from "@angular/forms";
export interface Chapter {
    id ?: number,
    name ?: string,
    subject_id ?: number,
    chapter_id ?: number,
}

export function newChapter(): Chapter {
    return {
        name: '',
        // level: ''
    };
}
export function chapterFormGroup(fb: FormBuilder): FormGroup {
    return new FormGroup({
        name: new FormControl('',Validators.required),
        subject_id: new FormControl('',Validators.required),
        chapter_id: new FormControl('',Validators.required),
    })
    return fb.group({
        name: [''],
        subject_id: [''],
        chapter_id: [''],
    });
}
