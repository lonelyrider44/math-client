import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SubjectIndexComponent } from './subject-index/subject-index.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { SubjectShowComponent } from './subject-show/subject-show.component';
import { SubjectQuestionsComponent } from './subject-questions/subject-questions.component';
import { SubjectChaptersComponent } from './subject-chapters/subject-chapters.component';
import { SubjectTestsComponent } from './subject-tests/subject-tests.component';
import { MathjaxModule } from 'mathjax-angular';
import { QuestionModule } from '../question/question.module';


@NgModule({ declarations: [
        SubjectFormComponent,
        SubjectIndexComponent,
        SubjectShowComponent,
        SubjectQuestionsComponent,
        SubjectChaptersComponent,
        SubjectTestsComponent
    ], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SubjectRoutingModule,
        MatInputModule,
        MatSnackBarModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MathjaxModule.forChild(),
        QuestionModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SubjectModule { }
