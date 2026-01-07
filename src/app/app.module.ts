import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MathjaxModule } from 'mathjax-angular';
import { TestComponent } from './test/test.component';
import { QuestionModule } from './modules/question/question.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BaseModule } from './modules/base/base.module';
import { BreadcrumbComponent } from './modules/base/breadcrumb/breadcrumb.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthModule } from './modules/auth/auth.module';
import { ApiConfigService } from './modules/shared/api-config.service';

export function initConfig(apiConfigService: ApiConfigService) {
    return () => apiConfigService.load();
}

@NgModule({ declarations: [
        AppComponent,
        AppNavComponent,
        TestComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MathjaxModule.forRoot(),
        QuestionModule,
        MatSlideToggleModule,
        BaseModule,
        BreadcrumbComponent,
        AuthModule], 
        providers: [
            provideHttpClient(withInterceptorsFromDi()),{
                provide: APP_INITIALIZER,
                useFactory: initConfig,
                multi: true,
                deps: [ApiConfigService]
            }
        ]})
export class AppModule { }
