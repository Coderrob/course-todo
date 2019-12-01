import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';

@Injectable()
export class MonitoringErrorHandler extends ErrorHandler {
  constructor(private injector: Injector) {
    super();
  }

  handleError(error: any): void {
    const appInsightsService = this.injector.get(AppInsightsService);
    appInsightsService.trackException(error);
    super.handleError(error);
  }
}
