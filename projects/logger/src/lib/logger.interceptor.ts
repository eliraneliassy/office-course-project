import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LOGGER_CONFIG, LoggerConfig} from "./logger.config";

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor(@Inject(LOGGER_CONFIG)
              private loggerConfig: LoggerConfig) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    console.group(`Logger Interceptor from app ${this.loggerConfig.appName}`);
    console.log(req);
    console.groupEnd();
    return next.handle(req);
  }

}


