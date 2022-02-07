import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'WiinsWebDapp';

  btnRoutes: btnRoutes[] = [
    { name: 'Home', path: '/' },
    { name: 'Contat Us', path: '/' },
    { name: 'GitHub', path: '/' },
  ]


}


export interface btnRoutes {
  name: string;
  path: string;
}