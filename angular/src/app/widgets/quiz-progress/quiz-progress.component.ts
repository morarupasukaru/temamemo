import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-progress',
  templateUrl: './quiz-progress.component.html',
  styleUrls: ['./quiz-progress.component.css']
})
export class QuizProgressComponent implements OnInit {

  private subscription: Subscription;
  learnedCount: number;
  totalCount: number;
  progress: number;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    const quiz = this.quizService.getQuiz();
    this.learnedCount = quiz.learnedCount;
    this.totalCount = quiz.totalCount;
    this.computeProgress();
    this.subscription = quiz.quizProgressSubject.subscribe(progress => {
      this.learnedCount = progress.learnedCount;
      this.totalCount = progress.totalCount;
      this.computeProgress();
    });
  }

  computeProgress() {
    this.progress = Math.floor(this.learnedCount / this.totalCount * 100);
  }
}
