import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectIndexComponent } from './subject-index/subject-index.component';
import { SubjectShowComponent } from './subject-show/subject-show.component';
import { SubjectQuestionsComponent } from './subject-questions/subject-questions.component';
import { SubjectChaptersComponent } from './subject-chapters/subject-chapters.component';
import { SubjectTestsComponent } from './subject-tests/subject-tests.component';
import { SubjectResolver } from './subject.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SubjectIndexComponent, data: { breadcrumb: "Subjects" } },
  { path: 'unos', pathMatch: 'full', component: SubjectFormComponent, data: { breadcrumb: "New subject" } },
  { path: ':id', component: SubjectShowComponent, 
    data: { breadcrumb: "subject" } , resolve: { subject: SubjectResolver},
    children:[
    { path: '', pathMatch: 'full', redirectTo: 'testovi' },
    { path: 'oblasti', pathMatch: 'full', component: SubjectChaptersComponent, data: { breadcrumb: "subject" } },
    { path: 'zadaci', pathMatch: 'full', component: SubjectQuestionsComponent, data: { breadcrumb: "subject" } },
    { path: 'testovi', pathMatch: 'full', component: SubjectTestsComponent, data: { breadcrumb: "subject" } },

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
