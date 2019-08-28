import { FlashcardItem } from './flashcard-item';

export class TextFlashcardItem extends FlashcardItem {
  readonly text: string;
  readonly big: boolean = false;
  readonly centered: boolean = false;
}
