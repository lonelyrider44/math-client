import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Document } from '../document';
import { FormAction } from '../../base/form-action';
import { DocumentService } from '../document.service';
import { DocumentType } from '../document-type';
import { DocumentTypeService } from '../document-type.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
    selector: 'app-document-show',
    // standalone: true,
    // imports: [],
    templateUrl: './document-show.component.html',
    styleUrl: './document-show.component.scss',
    standalone: false
})
export class DocumentShowComponent {
  public document: Document | null = null;
  public newQuestion: boolean = false;
  public newQuestionAction: FormAction = FormAction.CREATE;

  public documentTypes: DocumentType[] = [];

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly addOnBlur = true;

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private documentTypeService: DocumentTypeService
  ) { }
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.document = data['document'];
    })
    this.documentTypeService.all().subscribe( res => {
      this.documentTypes = res;
    })
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.document?.tags?.push(value);
      // this.document?.tags.update((tags: string[]) => [...tags, {name: value}]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  questionCreated() {
    this.newQuestion = false;
    this.documentService.find(this.document?.id).subscribe(res => {
      this.document = res;
    })
  }

  updateTipDokumenta($event: any){
    
    this.documentService.update(this.document?.id,{
      document_type_id: $event
    },false).subscribe(res => {
      
      console.log($event);
    })
  }
}
