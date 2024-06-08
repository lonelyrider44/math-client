import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionIndexComponent } from './question-index/question-index.component';
import { QuestionFormComponent } from './question-form/question-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: QuestionIndexComponent, data: { breadcrumb: "Questions" } },
  { path: 'new', pathMatch: 'full', component: QuestionFormComponent, data: { breadcrumb: "New question" } },
  // { path: ':id', component: SubjShowComponent, data: { breadcrumb: "subject" } , children:[
  //   { path: '', pathMatch: 'full', redirectTo: 'oblasti' },
  //   { path: 'oblasti', pathMatch: 'full', component: SubjectChaptersComponent, data: { breadcrumb: "subject" } },
  //   { path: 'zadaci', pathMatch: 'full', component: SubjectQuestionsComponent, data: { breadcrumb: "subject" } },
  //   { path: 'testovi', pathMatch: 'full', component: SubjectTestsComponent, data: { breadcrumb: "subject" } },

  // ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
