import { NgModule } from '@angular/core';
import { WebStoreComponent } from './web-store.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreModule } from './store';

@NgModule({
  declarations: [WebStoreComponent],
  imports: [
    RootStoreModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([]),
  ],
  exports: [WebStoreComponent],
})
export class WebStoreModule {}
