import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication-text',
  templateUrl: './publication-text.component.html',
  styleUrls: ['./publication-text.component.scss']
})
export class PublicationTextComponent implements OnInit {

  @Input() placeholder: string;
  pressed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onPressed(): void {
    this.pressed = true;
  }

}
