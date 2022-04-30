import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-publication-text',
  templateUrl: './publication-text.component.html',
  styleUrls: ['./publication-text.component.scss']
})
export class PublicationTextComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('myDiv') myDiv: ElementRef;
  @Output() currentText = new EventEmitter<string>();
  @Input() placeholder: string;
  pressed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onPressed(): void {
    this.pressed = true;
  }

  ngAfterViewInit() {
    this.myDiv.nativeElement.innerText
  }

  onKeyUp(): void {
    return this.currentText.emit(this.myDiv.nativeElement.innerText);
  }

  ngOnDestroy(): void {
    this.currentText.unsubscribe();
  }



}
