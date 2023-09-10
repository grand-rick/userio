import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { CoreFeaturesModule } from './core/core-features/core-features.module';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './core/AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreFeaturesModule,
    FeaturesModule
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
