import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit } from '@angular/core';
import { QuizService } from '../../services/quiz-service';
import { Router } from '@angular/router';
import { StudyLevelService } from 'src/app/widgets/study-level/study-level.service';
import { Quiz } from 'src/app/models/quiz';
import { Subscription } from 'rxjs';
import { QuizItem } from 'src/app/models/quiz-item';
import { Flashcard } from 'src/app/models/flashcard';
import { StudyHistory } from 'src/app/models/study-history';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit, OnDestroy {

  quiz: Quiz;
  item: QuizItem;
  count = 1;
  level = 1;
  answerDisplayed = false;
  showLevelUpAlert = false;
  subscriptionStudyLevel: Subscription;
  subscriptionCurentQuizItem: Subscription;

  constructor(private quizService: QuizService, private studyLevelService: StudyLevelService, private router: Router) { }

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

    this.subscriptionStudyLevel = this.studyLevelService.studyLevelSubject.subscribe(studyLevel => {
      if (studyLevel.level > this.level) {
        this.level = studyLevel.level;
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
    this.subscriptionStudyLevel.unsubscribe();
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
    this.studyLevelService.increaseXp();
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
