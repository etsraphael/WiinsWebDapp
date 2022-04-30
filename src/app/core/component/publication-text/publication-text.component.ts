import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-publication-text',
  templateUrl: './publication-text.component.html',
  styleUrls: ['./publication-text.component.scss'],
})
export class PublicationTextComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('contentDiv') myDiv: ElementRef;
  @Output() currentText = new EventEmitter<string>();
  @Input() placeholder: string;
  pressed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onPressed(): void {
    this.pressed = true;
  }

  ngAfterViewInit() {
    this.myDiv.nativeElement.innerText;
  }

  onKeyUp(event: KeyboardEvent): void {
    this.listenerKeyboardEvent(event.key);
    return this.currentText.emit(this.myDiv.nativeElement.innerText);
  }

  listenerKeyboardEvent(char: string): void {
    switch (char) {
      case '#':
        console.log('inject the hastag');
        
        this.myDiv.nativeElement.insertAdjacentHTML('beforeend', '<span style="border-radius: 8px; background-color: #dfdfdf59; padding-top: 0.25rem; padding-bottom: 0.25rem; padding-right: 0.5rem; padding-left: 0.5rem">#MyHastag2</span>')

        break;
    }
  }

  ngOnDestroy(): void {
    this.currentText.unsubscribe();
  }
}
