import {ModuleWithProviders, NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoggerInterceptor} from './logger.interceptor';
import {LOGGER_CONFIG, LoggerConfig} from "./logger.config";

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor,
      multi: true
    }
  ]
})
export class LoggerModule {
  static config(config: LoggerConfig): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        {
          provide: LOGGER_CONFIG,
          useValue: config,
          multi: true
        },

      ]
    }
  }
}
