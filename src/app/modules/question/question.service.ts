import { HttpClient } from '@angular/common/http';
import { Injectable, signal, effect } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Question } from './question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService<Question>{


  // defination of a signal
  public our_first_signal = signal<number>(0);
  protected selected_questions: any[];


  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "questions";

    this.selected_questions = JSON.parse(localStorage.getItem('selected_questions') ?? '[]');
    this.our_first_signal.set(this.selected_questions.length);

  }
}