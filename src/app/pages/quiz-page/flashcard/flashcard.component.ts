import { Component, OnInit, Input } from '@angular/core';
import { FlashcardItem } from '../../../services/flashcards/flashcard-item';
import { FlashcardItemType } from '../../../services/flashcards/flashcard-item-type';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html'
})
export class FlashcardComponent implements OnInit {

  @Input() item: FlashcardItem;
  type: FlashcardItemType;
  mediatypeSupported: boolean;

  constructor() { }

  ngOnInit() {
    if (this.item.type === FlashcardItemType.Sound) {
      this.checkSoundMediaSupported();
    }
  }

  checkSoundMediaSupported() {
      // Create an audio element so we can use the canPlayType method
      const audio = document.createElement('audio');
      const result = audio.canPlayType(this.item.mediatype);
      this.mediatypeSupported = result !== '';
  }
}
