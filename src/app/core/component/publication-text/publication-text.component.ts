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
  @ViewChild('contentDiv') myDiv: ElementRef<HTMLDivElement>;
  @Output() onSendText = new EventEmitter<string>();
  @Input() placeholder: string;
  pressed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onPressed(): void {
    this.pressed = true;
    // this.setCaret();
  }

  ngAfterViewInit() {
    // this.myDiv.nativeElement.innerText;

  }

  onKeyUp(event: KeyboardEvent): void {
    // const position = this.getCaretCharacterOffsetWithin(event.target);
    // console.log(position);

    return this.listenerKeyboardEvent(event.key);
  }

  listenerKeyboardEvent(char: string): void {
    switch (char) {
      case '#': {
        const myHastagId = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        this.myDiv.nativeElement.insertAdjacentHTML(
          'beforeend',
          `<span id="${myHastagId}" style="border-radius: 8px; background-color: #dfdfdf59; padding-top: 0.25rem; padding-bottom: 0.25rem; padding-right: 0.5rem"> </span> &nbsp;`
        );

        const el = document.getElementById(myHastagId);
        var range = document.createRange();
        var sel = window.getSelection();
    
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

  setCaret(): void {
    var el = this.myDiv.nativeElement;
    var range = document.createRange();
    var sel = window.getSelection();

    console.log(el.childNodes);

    range.setStart(el.childNodes[1], 1);
    range.collapse(true);

    sel.removeAllRanges();
    sel.addRange(range);
  }

  getCaretCharacterOffsetWithin(element: HTMLElement | any) {
    var caretOffset: number = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != 'undefined') {
      sel = win.getSelection();
      if (sel.rangeCount > 0) {
        var range = win.getSelection().getRangeAt(0);
        var preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretOffset = preCaretRange.toString().length;
      }
    } else if ((sel = doc.selection) && sel.type != 'Control') {
      var textRange = sel.createRange();
      var preCaretTextRange = doc.body.createTextRange();
      preCaretTextRange.moveToElementText(element);
      preCaretTextRange.setEndPoint('EndToEnd', textRange);
      caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
  }

  sendText(): void {
    return this.onSendText.emit(this.myDiv.nativeElement.innerText);
  }

  ngOnDestroy(): void {
    this.onSendText.unsubscribe();
  }
}
