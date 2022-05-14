import { NgModule } from '@angular/core';
import { WebStoreComponent } from './web-store.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [WebStoreComponent],
  providers: [{ provide: 'environment', useValue: environment }],
  imports: [
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  exports: [WebStoreComponent],
})
export class WebStoreModule {}
