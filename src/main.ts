import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();

  Sentry.init({
    environment: environment.production ? 'production' : 'development',
    dsn: 'https://74f6bb44402140d39986bfccda006af2@o833200.ingest.sentry.io/6454131',
    integrations: [
      new BrowserTracing({
        tracingOrigins: ['https://www.wiins.io'],
        routingInstrumentation: Sentry.routingInstrumentation,
      }),
    ],
    tracesSampleRate: 1.0,
  });
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
