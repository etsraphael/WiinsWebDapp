import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-contact',
  templateUrl: './cards-contact.component.html',
  styleUrls: ['./cards-contact.component.scss']
})
export class CardsContactComponent implements OnInit {

  constructor() { }

  // To dev page
  devs: wiinsweb[] = [
    { avatar: '../../../../../../assets/img/j-contact/devs/raphael.jfif', name: 'Raphaël', path: 'https://github.com/etsraphael' },
    { avatar: '../../../../../../assets/img/j-contact/devs/nathanael.jpg', name: 'Nathanaël', path: 'https://github.com/Nathanael421' },
  ]

  ngOnInit(): void {
  }

  onJoinChat(): Window | null {
    return window.open('https://discord.gg/B6xUzqUp', '_blank');
  }

  onWiinsWeb(): Window | null {
    return window.open('https://github.com/etsraphael/WiinsWeb', '_blank');
  }

  goToGitHub(path: string): Window | null {
    return window.open(path, '_blank');
  }

}

export interface wiinsweb {
  avatar: string;
  name: string;
  path: string;
}
