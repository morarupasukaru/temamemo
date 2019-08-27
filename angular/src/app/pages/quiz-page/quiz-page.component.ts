import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from '../../services/quiz-service';
import { Flashcard } from '../../models/flashcard';
import { Router } from '@angular/router';
import { QuizState } from './quiz-state';
import { StudyLevelService } from 'src/app/widgets/study-level/study-level.service';
import { Quiz } from 'src/app/models/quiz';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit, OnDestroy {

  answerDisplayed = false;
  currentFlashcard: Flashcard = new Flashcard();
  count = 0;
  quizStates: QuizState[];
  quiz: Quiz;
  subscription: Subscription;
  level = 1;
  showLevelUpAlert = false;

  constructor(private quizService: QuizService, private studyLevelService: StudyLevelService, private router: Router) { }

  ngOnInit() {
    this.quiz = this.quizService.getQuiz();
    this.showQuestion();

    this.subscription = this.studyLevelService.studyLevelSubject.subscribe(studyLevel => {
      if (studyLevel.level > this.level) {
        this.level = studyLevel.level;
        this.showLevelUpAlert = true;
        setTimeout(() => {
          this.showLevelUpAlert = false;
        }, 5000);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  displayAnswer() {
    this.answerDisplayed = true;
  }

  skipQuestion() {
    this.answerDisplayed = false;
    this.quiz.nextQuestion();
    this.showQuestion();
  }

  ok() {
    this.quiz.ok();
    this.quiz.nextQuestion();
    this.studyLevelService.increaseXp();
    this.showQuestion();
  }

  ko() {
    this.quiz.ko();
    this.quiz.nextQuestion();
    this.showQuestion();
  }

  showQuestion() {
    const question = this.quiz.getCurrentQuestion();
    if (!question) {
      this.router.navigate(['']);
    } else {
      this.currentFlashcard = question;
      this.count++;
      this.answerDisplayed = false;
      this.quizStates = [];
      if (this.currentFlashcard.studyHistory.isNew()) {
        this.quizStates.push(QuizState.New);
      } else if (this.currentFlashcard.studyHistory.isDifficult()) {
        this.quizStates.push(QuizState.Difficult);

      } else if (this.currentFlashcard.studyHistory.isAlmostLearned()) {
        this.quizStates.push(QuizState.AlmostLearned);

      } else if (this.currentFlashcard.studyHistory.comboOk > 0) {
        const doubleOkCount = Math.floor(this.currentFlashcard.studyHistory.comboOk / 2);
        for (let i = 0; i < doubleOkCount; i++) {
          this.quizStates.push(QuizState.DoubleOk);
        }
        const okCount = this.currentFlashcard.studyHistory.comboOk % 2;
        for (let i = 0; i < okCount; i++) {
          this.quizStates.push(QuizState.Ok);
        }
      }
    }
  }
}
