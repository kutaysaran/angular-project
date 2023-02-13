import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.css']
})
export class PublicHeaderComponent {
 @Output() commentChange = new EventEmitter<string>();
  comment: string = "";
  onKeyUp(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.commentChange.emit(this.comment);
    }
  }
}
