import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../../services/quiz-service';
import { Flashcard } from '../../models/flashcard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  question: string;
  answer: string;
  answerDisplayed = false;
  flashcards: Flashcard[];
  indexCurrentFlashcard: number;
  currentFlashcard: Flashcard;
  count = 0;

  constructor(private quizServiceService: QuizServiceService, private router: Router) { }

  ngOnInit() {
    this.flashcards = this.quizServiceService.getQuiz();
    this.indexCurrentFlashcard = 0;
    this.showQuestion();
  }

  displayAnswer() {
    this.answerDisplayed = true;
  }

  skipQuestion() {
    this.answerDisplayed = false;
  }

  ok() {
    this.showQuestion();
  }

  ko() {
    this.showQuestion();
  }

  showQuestion() {
    if (this.indexCurrentFlashcard === this.flashcards.length) {
      this.router.navigate(['']);
    } else {
      this.currentFlashcard = this.flashcards[this.indexCurrentFlashcard++];
      this.count++;
      this.answerDisplayed = false;
    }
  }
}
