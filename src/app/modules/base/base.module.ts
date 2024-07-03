import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
})
export class BaseModule { }
