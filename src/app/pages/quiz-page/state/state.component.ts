import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { State } from './state';
import { Quiz } from '../../../services/quiz/quiz';
import { QuizItem } from '../../../services/quiz/quiz-item';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html'
})
export class StateComponent implements OnInit, OnDestroy {

  @Input() quiz: Quiz;
  quizStates: State[];
  comboOk: number;
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.initData(this.quiz.getCurrentQuestion());

    this.subscription = this.quiz.currentQuizItemSubject.subscribe(
      {
        next: (item: QuizItem) => {
          this.initData(item);
        },
        complete: () => {
          this.initData(null);
        }
      });
  }

  private initData(quizItem: QuizItem) {
    if (!!quizItem && !!quizItem.studyHistory) {
      this.comboOk = quizItem.studyHistory.comboOk;
    } else {
      this.comboOk = 0;
    }
    this.computeState(quizItem);
  }

  private computeState(quizItem: QuizItem) {
    this.quizStates = [];
    if (!!quizItem && !!quizItem.studyHistory) {
      if (quizItem.studyHistory.isNew()) {
        this.quizStates.push(State.New);
      } else if (quizItem.studyHistory.isDifficult()) {
        this.quizStates.push(State.Difficult);

      } else if (quizItem.studyHistory.isAlmostLearned()) {
        this.quizStates.push(State.AlmostLearned);

      } else if (quizItem.studyHistory.comboOk > 0) {
        const doubleOkCount = Math.floor(quizItem.studyHistory.comboOk / 2);
        for (let i = 0; i < doubleOkCount; i++) {
          this.quizStates.push(State.DoubleOk);
        }
        const okCount = quizItem.studyHistory.comboOk % 2;
        for (let i = 0; i < okCount; i++) {
          this.quizStates.push(State.Ok);
        }
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
