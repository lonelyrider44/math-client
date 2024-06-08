import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionIndexComponent } from './question-index/question-index.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { MathjaxModule } from 'mathjax-angular';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { QuestionComponent } from './question/question.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    QuestionIndexComponent,
    QuestionFormComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    MathjaxModule.forChild(),
    MatIconModule,
    MatButtonModule,
    FormsModule,ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    QuestionFormComponent,
    QuestionComponent
  ]
})
export class QuestionModule { }
