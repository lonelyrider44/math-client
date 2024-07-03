import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Document } from '../document';
import { FormAction } from '../../base/form-action';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-show',
  // standalone: true,
  // imports: [],
  templateUrl: './document-show.component.html',
  styleUrl: './document-show.component.scss'
})
export class DocumentShowComponent {
  public document: Document|null = null;
  public newQuestion:boolean = false;
  public newQuestionAction: FormAction = FormAction.CREATE;

  constructor( private route: ActivatedRoute, private documentService: DocumentService){}
  ngOnInit(){
    this.route.data.subscribe((data) => {
      this.document = data['document'];
    })
  }

  questionCreated(){
    this.newQuestion = false;
    this.documentService.find(this.document?.id).subscribe(res => {
      this.document = res;
    })
  }
}
