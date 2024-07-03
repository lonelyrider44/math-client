import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentIndexComponent } from './document-index/document-index.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { documentResolver } from './document.resolver';
import { DocumentShowComponent } from './document-show/document-show.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DocumentIndexComponent, data: { breadcrumb: "Documents" } },
  { path: 'create', pathMatch: 'full', component: DocumentFormComponent, data: { breadcrumb: "New document" } },
  { path: ':id', component: DocumentShowComponent, data: { breadcrumb: "document" } , 
  resolve: { document: documentResolver },
  children:[
  //   { path: '', pathMatch: 'full', redirectTo: 'oblasti' },
  //   { path: 'oblasti', pathMatch: 'full', component: SubjectChaptersComponent, data: { breadcrumb: "subject" } },
  //   { path: 'zadaci', pathMatch: 'full', component: SubjectQuestionsComponent, data: { breadcrumb: "subject" } },
  //   { path: 'testovi', pathMatch: 'full', component: SubjectTestsComponent, data: { breadcrumb: "subject" } },

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
