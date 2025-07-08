import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './modules/auth/login/login.component';

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
    path: 'math-objects',
    children: [{
      data: { breadcrumb: "Objects" },
      path: '',
      loadChildren: () => import('./modules/math-object/math-object.module').then(m => m.MathObjectModule)
    }],
  },
  {
    path: '', 
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
