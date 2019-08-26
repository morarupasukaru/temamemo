import { Flashcard} from './flashcard';
import { Subject } from 'rxjs';

export class Quiz {
  private flashcards: Flashcard[];
  private index: number;
  private _totalCount: number;
  private _learnedCount: number;
  quizProgressSubject = new Subject<{learnedCount: number, totalCount: number}>();

  constructor(flashcards: Flashcard[]) {
    this.flashcards = flashcards;
    this.index = 0;
    this._totalCount = this.flashcards.length;
    this._learnedCount = 0;
  }

  getCurrentQuestion(): Flashcard {
    return this.flashcards[this.index];
  }

  nextQuestion() {
    this.index++;
    if (this.index >= this.flashcards.length) {
      this.index = 0;
    }
  }

  ok() {
    const flashcard = this.flashcards[this.index];
    flashcard.studyHistory.ok();
    if (flashcard.studyHistory.isLearned()) {
      this._learnedCount++;
      this.flashcards.splice(this.index, 1);
      this.quizProgressSubject.next({learnedCount: this._learnedCount, totalCount: this._totalCount });
    }
  }

  ko() {
    const flashcard = this.flashcards[this.index];
    flashcard.studyHistory.ko();
  }

  get learnedCount() {
    return this._learnedCount;
  }

  get totalCount() {
    return this._totalCount;
  }
}
