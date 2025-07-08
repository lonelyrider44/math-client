import { FormBuilder, FormGroup } from "@angular/forms";
import { Question } from "../question/question";

export interface Document {
    id?: number,
    url?: string,
    file_url?:string,
    name?:string
    filename?:string,
    type?: string,
    latex?: string,
    tags?: string[],
    document_type_id ?: number,
    previous?: Document,
    next?:Document,

    document_type?: DocumentType,
    questions?: Question[]
}

export function newDocument(): Document {
    return {};
}
export function documentFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
        file: [null],
    });
}
