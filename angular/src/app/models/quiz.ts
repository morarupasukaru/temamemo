import { Subject } from 'rxjs';
import { QuizItem } from './quiz-item';

export class Quiz {
  private items: QuizItem[];
  private index: number;
  private _totalCount: number;
  private _learnedCount: number;
  quizProgressSubject: Subject<{ learnedCount: number, totalCount: number }>;
  currentQuizItemSubject = new Subject<QuizItem>();

  constructor(items: QuizItem[]) {
    this.items = items;
    this.index = 0;
    this._totalCount = this.items.length;
    this._learnedCount = 0;
    this.resetQuizItemSubject();
    if (this._totalCount > 0) {
      this.currentQuizItemSubject.next(this.getCurrentQuestion());
    }
  }

  nextQuestion() {
    this.index++;
    if (this.index >= this.items.length) {
      this.currentQuizItemSubject.complete();
      this.resetQuizItemSubject();
    } else {
      this.currentQuizItemSubject.next(this.getCurrentQuestion());
    }
  }

  resetQuizItemSubject() {
    this.index = 0;
    this.quizProgressSubject = new Subject<{ learnedCount: number, totalCount: number }>();
  }

  getCurrentQuestion(): QuizItem {
    if (this.items && this.items.length > 0) {
      return this.items[this.index];
    } else {
      return null;
    }
  }

  ok() {
    const item = this.items[this.index];
    item.studyHistory.ok();
    if (item.studyHistory.isLearned()) {
      this._learnedCount++;
      this.items.splice(this.index, 1);
      this.quizProgressSubject.next({ learnedCount: this._learnedCount, totalCount: this._totalCount });
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
