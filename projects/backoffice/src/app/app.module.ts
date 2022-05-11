import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {LOGGER_CONFIG, LoggerConfig, LoggerModule} from "@office/logger";
import {environment} from "../environments/environment.prod";

const loggerConfig: LoggerConfig = {
  appName: 'Backoffice',
  isProd: environment.production
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.config(loggerConfig)
  ],
  providers: [
    // {provide: LOGGER_CONFIG, useValue: loggerConfig, multi: false}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
