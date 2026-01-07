import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Document } from './document';
import { environment } from 'src/environments/environment';
import { ApiConfigService } from '../shared/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends BaseService<Document> {

  constructor(httpClient: HttpClient, apiConfigService: ApiConfigService) {
    super(httpClient, apiConfigService);
    this.url_model = "documents";
  }

  next(document: Document, stringify: boolean = false){
    return this.httpClient.put<Document>(`${this.api_url}/${this.url_model}/${document.id}/next`, {}, this.httpOptions)
  }
}
