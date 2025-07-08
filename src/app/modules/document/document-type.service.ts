import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService extends BaseService<DocumentType> {

  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "document-types";
  }
}
