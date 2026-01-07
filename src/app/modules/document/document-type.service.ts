import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from '../shared/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService extends BaseService<DocumentType> {

  constructor(httpClient: HttpClient, apiConfigService: ApiConfigService) {
    super(httpClient, apiConfigService);  
    this.url_model = "document-types";
  }
}
