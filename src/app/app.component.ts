import { Component, OnInit } from '@angular/core';
import { TranslationService } from './core/service/translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslationService) {}

  ngOnInit(): void {
    this.translate.setDefaultLang();
  }
}
