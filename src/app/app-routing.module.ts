import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'subjects',
    children: [{
      data: { breadcrumb: "Subjects" },
      path: '',
      loadChildren: () => import('./modules/subject/subject.module').then(m => m.SubjectModule)
    }],

  },
  {
    path: 'documents',
    children: [{
      data: { breadcrumb: "Documents" },
      path: '',
      loadChildren: () => import('./modules/document/document.module').then(m => m.DocumentModule)
    }],
  },
  {
    path: 'questions',
    children: [{
      data: { breadcrumb: "Questions" },
      path: '',
      loadChildren: () => import('./modules/question/question.module').then(m => m.QuestionModule)
    }],
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
