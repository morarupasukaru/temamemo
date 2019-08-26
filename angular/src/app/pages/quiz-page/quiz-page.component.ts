import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz-service';
import { Flashcard } from '../../models/flashcard';
import { Router } from '@angular/router';
import { QuizState } from './quiz-state';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  answerDisplayed = false;
  currentFlashcard: Flashcard;
  count = 0;
  quizStates: QuizState[];

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.showQuestion();
  }

  displayAnswer() {
    this.answerDisplayed = true;
  }

  skipQuestion() {
    this.answerDisplayed = false;
    this.quizService.nextQuestion();
    this.showQuestion();
  }

  ok() {
    this.quizService.ok();
    this.quizService.nextQuestion();
    this.showQuestion();
  }

  ko() {
    this.quizService.ko();
    this.quizService.nextQuestion();
    this.showQuestion();
  }

  showQuestion() {
    const question = this.quizService.getCurrentQuestion();
    if (question === null) {
      this.router.navigate(['']);
    } else {
      this.currentFlashcard = question;
      this.count++;
      this.answerDisplayed = false;
    }
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
