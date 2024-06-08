import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Document } from './document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends BaseService<Document> {

  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "documents";
  }
}
