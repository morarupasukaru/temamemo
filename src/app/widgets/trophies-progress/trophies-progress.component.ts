import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from '../../services/quiz/quiz-service';

@Component({
  selector: 'app-trophies-progress',
  templateUrl: './trophies-progress.component.html'
})
export class TrophiesProgressComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  learnedCount: number;
  totalCount: number;
  progress: number;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    const quiz = this.quizService.getQuiz();
    this.computeProgress();
    this.subscription = quiz.quizProgressSubject.subscribe(progress => {
      this.learnedCount = progress.learnedCount;
      this.totalCount = progress.totalCount;
      this.computeProgress();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  computeProgress() {
    this.progress = Math.floor(this.learnedCount / this.totalCount * 100);
  }
}
