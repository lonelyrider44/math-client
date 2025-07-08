import { FormBuilder, FormGroup } from "@angular/forms";

export interface DocumentType {
    id ?: number,
    name ?: string
}


export function newDocumentType(): DocumentType {
    return {};
}
export function documentFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
        file: [null],
    });
}
