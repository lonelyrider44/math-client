import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Subject } from './subject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService extends BaseService<Subject> {

  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "subjects";
  }
}
