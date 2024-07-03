import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Chapter } from './chapter';

@Injectable({
  providedIn: 'root'
})
export class ChapterService extends BaseService<Chapter> {

  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "chapters";
  }
}
