import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'wiins-editable-content-event',
  templateUrl: './editable-content-event.component.html',
  styleUrls: ['./editable-content-event.component.scss'],
})
export class EditableContentEventComponent {
  @ViewChild('contentDiv') myDiv: ElementRef<HTMLDivElement>;
  @Output() onSendText = new EventEmitter<string>();
  @Output() onWritting = new EventEmitter<string>();
  @Input() placeholder: string;
  @Input() theme = 'dark';
  @Input() maxLenght = 250;
  pressed = false;

  onPressed(): void {
    this.pressed = true;
  }

  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Backspace') {
      return null;
    }

    if (this.myDiv.nativeElement.innerText.length > this.maxLenght) {
      event.preventDefault();
      return null;
    }

    return this.listenerKeyboardEvent(event.key);
  }

  listenerKeyboardEvent(char: string): void {
    switch (char) {
      case '#': {
        const myHastagId = (((1 + Math.random()) * 0x10000) | 0)
          .toString(16)
          .substring(1);
        this.myDiv.nativeElement.insertAdjacentHTML(
          'beforeend',
          `<span id="${myHastagId}" style="border-radius: 8px; background-color: #dfdfdf59; padding-top: 0.25rem; padding-bottom: 0.25rem; padding-right: 0.5rem"> </span> &nbsp;`
        );

        const el = document.getElementById(myHastagId);
        const range = document.createRange();
        const sel = window.getSelection();

        range.setStart(el, 1);
        range.collapse(true);

        sel.removeAllRanges();
        sel.addRange(range);

        break;
      }
      case '@': {
        const myHastagId = (((1 + Math.random()) * 0x10000) | 0)
          .toString(16)
          .substring(1);
        this.myDiv.nativeElement.insertAdjacentHTML(
          'beforeend',
          `<span id="${myHastagId}" style="border-radius: 8px; background-color: #dfdfdf59; padding-top: 0.25rem; padding-bottom: 0.25rem; padding-right: 0.5rem"> </span> &nbsp;`
        );

        const el = document.getElementById(myHastagId);
        const range = document.createRange();
        const sel = window.getSelection();

        range.setStart(el, 1);
        range.collapse(true);

        sel.removeAllRanges();
        sel.addRange(range);

        break;
      }
      case 'Enter': {
        this.sendText();
        break;
      }
    }
    return this.onWritting.emit(this.myDiv.nativeElement.innerText);
  }

  sendText(): void {
    return this.onSendText.emit(this.myDiv.nativeElement.innerText);
  }

  ngOnDestroy(): void {
    this.onSendText.unsubscribe();
    this.onWritting.unsubscribe();
  }
}
