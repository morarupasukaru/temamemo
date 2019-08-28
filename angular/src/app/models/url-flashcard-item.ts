import { FlashcardItem } from './flashcard-item';

export class UrlFlashcardItem extends FlashcardItem {
  readonly url: string;
  readonly description: string;
  readonly centered: boolean = false;
}
