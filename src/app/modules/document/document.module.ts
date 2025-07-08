import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentFormComponent } from './document-form/document-form.component';
import { DocumentIndexComponent } from './document-index/document-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { QuestionModule } from '../question/question.module';
import { DocumentShowComponent } from './document-show/document-show.component';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    DocumentShowComponent,
    DocumentFormComponent,
    DocumentIndexComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    QuestionModule,
    MatSelectModule,
    MatChipsModule,
    MatExpansionModule
  ]
})
export class DocumentModule { }
