import {InjectionToken} from "@angular/core";

export interface LoggerConfig{
  appName: string;
  isProd: boolean
}

export const LOGGER_CONFIG: InjectionToken<LoggerConfig> =
  new InjectionToken<LoggerConfig>('Logger Config');

