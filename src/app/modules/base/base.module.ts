import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({ declarations: [], imports: [CommonModule,
        CommonModule,
        RouterModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class BaseModule { }
