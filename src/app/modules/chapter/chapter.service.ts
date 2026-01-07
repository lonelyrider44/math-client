import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Chapter } from './chapter';
import { ApiConfigService } from '../shared/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ChapterService extends BaseService<Chapter> {

  constructor(httpClient: HttpClient, apiConfigService: ApiConfigService) {
    super(httpClient, apiConfigService);
    this.url_model = "chapters";
  }
}
