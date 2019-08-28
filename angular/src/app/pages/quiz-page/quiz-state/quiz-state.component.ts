import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { QuizState } from './quiz-state';
import { QuizItem } from 'src/app/models/quiz-item';
import { Subscription } from 'rxjs';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-quiz-state',
  templateUrl: './quiz-state.component.html',
  styleUrls: ['./quiz-state.component.css']
})
export class QuizStateComponent implements OnInit, OnDestroy {

  @Input() quiz: Quiz;
  quizStates: QuizState[];
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
        this.quizStates.push(QuizState.New);
      } else if (quizItem.studyHistory.isDifficult()) {
        this.quizStates.push(QuizState.Difficult);

      } else if (quizItem.studyHistory.isAlmostLearned()) {
        this.quizStates.push(QuizState.AlmostLearned);

      } else if (quizItem.studyHistory.comboOk > 0) {
        const doubleOkCount = Math.floor(quizItem.studyHistory.comboOk / 2);
        for (let i = 0; i < doubleOkCount; i++) {
          this.quizStates.push(QuizState.DoubleOk);
        }
        const okCount = quizItem.studyHistory.comboOk % 2;
        for (let i = 0; i < okCount; i++) {
          this.quizStates.push(QuizState.Ok);
        }
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
