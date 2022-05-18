import { NgModule } from '@angular/core';
import { CommonModelsModule } from '@wiins/common-models';
import { CommonInterfacesComponent } from './common-interfaces.component';

@NgModule({
  declarations: [CommonInterfacesComponent],
  imports: [CommonModelsModule],
  exports: [CommonInterfacesComponent],
})
export class CommonInterfacesModule {}
