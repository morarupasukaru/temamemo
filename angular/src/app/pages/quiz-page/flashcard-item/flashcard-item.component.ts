import { Component, OnInit, Input } from '@angular/core';
import { FlashcardItemType } from '../../../models/flashcard-item-type';
import { FlashcardItem } from '../../../models/flashcard-item';

@Component({
  selector: 'app-flashcard-item',
  templateUrl: './flashcard-item.component.html',
  styleUrls: ['./flashcard-item.component.css']
})
export class FlashcardItemComponent implements OnInit {

  @Input() item: FlashcardItem;
  type: FlashcardItemType;
  mediatypeSupported: boolean;

  constructor() { }

  ngOnInit() {
    if (this.item.type === FlashcardItemType.Sound) {
      // Create an audio element so we can use the canPlayType method
      const audio = document.createElement('audio');
      const result = audio.canPlayType(this.item.mediatype);
      this.mediatypeSupported = result !== '';
    }
  }

}
