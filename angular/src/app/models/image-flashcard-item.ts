import { FlashcardItem } from './flashcard-item';

export class ImageFlashcardItem extends FlashcardItem {
  readonly url: string;
  readonly description?: string;
  readonly width?: string;
  readonly centered: boolean = true;
}
