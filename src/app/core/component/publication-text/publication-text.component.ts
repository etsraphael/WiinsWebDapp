import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-publication-text',
  templateUrl: './publication-text.component.html',
  styleUrls: ['./publication-text.component.scss'],
})
export class PublicationTextComponent implements OnDestroy {
  @ViewChild('contentDiv') myDiv: ElementRef<HTMLDivElement>;
  @Output() onSendText = new EventEmitter<string>();
  @Input() placeholder: string;
  pressed = false;

  onPressed(): void {
    this.pressed = true;
  }

  onKeyUp(event: KeyboardEvent): void {
    // const position = this.getCaretCharacterOffsetWithin(event.target);
    // console.log(position);

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

        console.log(el.childNodes);

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
  }

  sendText(): void {
    return this.onSendText.emit(this.myDiv.nativeElement.innerText);
  }

  ngOnDestroy(): void {
    this.onSendText.unsubscribe();
  }
}
