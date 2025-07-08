import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Document } from './document';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends BaseService<Document> {

  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "documents";
  }

  next(document: Document, stringify: boolean = false){
    return this.httpClient.put<Document>(`${environment.api_url}/${this.url_model}/${document.id}/next`, {}, this.httpOptions)
  }
}
