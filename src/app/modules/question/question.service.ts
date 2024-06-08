import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService<Question>{

  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "questions";
  }
}