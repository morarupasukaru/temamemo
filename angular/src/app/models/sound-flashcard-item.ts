import { FlashcardItem } from './flashcard-item';

export class SoundFlashcardItem extends FlashcardItem {
  readonly url: string;
  readonly mediatype: string;
  readonly autoplay: boolean = true;
  readonly centered: boolean = true;
}
