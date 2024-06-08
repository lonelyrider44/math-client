import { FormBuilder, FormGroup } from "@angular/forms";

export interface Document {
    id?: number,
    url?: string,
    file_url?:string,
    name?:string
}

export function newDocument(): Document {
    return {};
}
export function documentFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
        file: [null],
    });
}
