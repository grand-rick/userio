import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './core/AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './core/interceptors/request.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        {
            provide: APP_SERVICE_CONFIG,
            useValue: APP_CONFIG
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 2000,
            closeButton: true
        }),
        HttpClientModule,
        AppRoutingModule
    ]
})
export class AppModule { }
