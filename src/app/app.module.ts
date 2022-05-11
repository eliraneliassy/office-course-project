import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import {LOGGER_CONFIG, LoggerConfig, LoggerModule} from "@office/logger";


const loggerConfig: LoggerConfig = {
  appName: 'Book Store',
  isProd: environment.production
};


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    LoggerModule.config(loggerConfig)
  ],
  providers: [

  { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }},
    // {provide: HTTP_INTERCEPTORS, multi: true, useClass: LoggerInterceptor}
    // {provide: LOGGER_CONFIG, useValue: loggerConfig, multi: false}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
