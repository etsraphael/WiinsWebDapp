import { Component, OnInit } from '@angular/core';
import { TraductionService } from './core/service/translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'WiinsWebDapp';

  constructor(public translate: TraductionService) { }

  ngOnInit(): void {
    this.translate.setDefaultLang();
  }
}
