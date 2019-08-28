import { Subject } from 'rxjs';
import { QuizItem } from './quiz-item';

export class Quiz {
  private items: QuizItem[];
  private index: number;
  private _totalCount: number;
  private _learnedCount: number;
  quizProgressSubject = new Subject<{learnedCount: number, totalCount: number}>();

  constructor(items: QuizItem[]) {
    this.items = items;
    this.index = 0;
    this._totalCount = this.items.length;
    this._learnedCount = 0;
  }

  getCurrentQuestion(): QuizItem {
    return this.items[this.index];
  }

  nextQuestion() {
    this.index++;
    if (this.index >= this.items.length) {
      this.index = 0;
    }
  }

  ok() {
    const item = this.items[this.index];
    item.studyHistory.ok();
    if (item.studyHistory.isLearned()) {
      this._learnedCount++;
      this.items.splice(this.index, 1);
      this.quizProgressSubject.next({learnedCount: this._learnedCount, totalCount: this._totalCount });
    }
  }

  ko() {
    const item = this.items[this.index];
    item.studyHistory.ko();
  }

  get learnedCount() {
    return this._learnedCount;
  }

  get totalCount() {
    return this._totalCount;
  }

  get hasToLearn() {
    return this.totalCount - this.learnedCount > 0;
  }
}
