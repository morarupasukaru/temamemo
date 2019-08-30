import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Quiz } from '../../services/quiz/quiz';
import { QuizItem } from '../../services/quiz/quiz-item';
import { QuizService } from '../../services/quiz/quiz-service';
import { LevelProgressService } from '../../widgets/level-progress/level-progress.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html'
})
export class QuizPageComponent implements OnInit, OnDestroy {

  quiz: Quiz;
  item: QuizItem;
  count = 1;
  level = 1;
  answerDisplayed = false;
  showLevelUpAlert = false;
  subscriptionLevelProgress: Subscription;
  subscriptionCurentQuizItem: Subscription;

  constructor(private quizService: QuizService, private levelProgressService: LevelProgressService, private router: Router) { }

  ngOnInit() {
    this.quiz = this.quizService.getQuiz();
    this.showQuestion(this.quiz.getCurrentQuestion());

    this.subscriptionCurentQuizItem = this.quiz.currentQuizItemSubject.subscribe(
      {
        next: (item: QuizItem) => {
          this.showQuestion(item);
        },
        complete: () => {
          this.backToHomePage();
        }
      }
    );

    this.subscriptionLevelProgress = this.levelProgressService.levelProgressSubject.subscribe(levelProgress => {
      if (levelProgress.level > this.level) {
        this.level = levelProgress.level;
        this.showLevelUpAlert = true;
        setTimeout(() => {
          this.showLevelUpAlert = false;
        }, 5000);
      }
    });
  }

  private showQuestion(item: QuizItem) {
    if (!item) {
      this.backToHomePage();
    } else {
      this.item = item;
      this.answerDisplayed = false;
    }
  }

  private backToHomePage() {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.subscriptionLevelProgress.unsubscribe();
    this.subscriptionCurentQuizItem.unsubscribe();
  }

  displayAnswer() {
    this.answerDisplayed = true;
  }

  skipQuestion() {
    this.answerDisplayed = false;
    this.nextQuestion();
  }

  ok() {
    this.quiz.ok();
    this.levelProgressService.increaseXp();
    this.nextQuestion();
  }

  ko() {
    this.quiz.ko();
    this.nextQuestion();
  }

  private nextQuestion() {
    this.count++;
    this.quiz.nextQuestion();
  }
}
