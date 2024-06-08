import { Component } from '@angular/core';
import { Document } from '../document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-index',
  templateUrl: './document-index.component.html',
  styleUrls: ['./document-index.component.scss']
})
export class DocumentIndexComponent {
  documents:Document[] = [];

  constructor(public documentService:DocumentService){

  }

  ngOnInit(){
    this.documentService.all().subscribe(data => this.documents = data)
  }
}
