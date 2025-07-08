import { Component } from '@angular/core';
import { Document } from '../document';
import { DocumentService } from '../document.service';
import { SubjectService } from '../../subject/subject.service';
import { Subject } from '../../subject/subject';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-document-index',
    templateUrl: './document-index.component.html',
    styleUrls: ['./document-index.component.scss'],
    standalone: false
})
export class DocumentIndexComponent {
  documents:Document[] = [];
  subjects: Subject[] = [];
  frmSearch: FormGroup;
  

  constructor(public documentService:DocumentService, public subjectService: SubjectService, fb: FormBuilder){
    this.frmSearch = fb.group({
      subject_ids: [null],
      text: [null],
  });
  }

  ngOnInit(){
    this.subjectService.all().subscribe(data => this.subjects = data)
    this.documentService.all().subscribe(data => this.documents = data)
  }
  applySearch(){
    console.log(this.frmSearch.value)
    this.documentService.search(this.frmSearch.value).subscribe(data => this.documents = data);
  }
}
