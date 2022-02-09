import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goToDiscord(): Window | null {
    return window.open('https://discord.gg/zkw5QaBbfR', '_blank');
  }
}
