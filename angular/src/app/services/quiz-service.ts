import { Injectable, OnInit } from '@angular/core';
import { Flashcard } from '../models/flashcard';
import { FlashcardService } from './flashcard-service';
import { FlashcardStudyHistory } from '../models/flashcard-study-history';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private flashcards: Flashcard[];
  private index: number;

  constructor(private flashcardService: FlashcardService) { }

  getCurrentQuestion(): Flashcard {
    if (this.flashcards === undefined) {
      this.flashcards = this.getQuiz();
      this.index = 0;
    }
    const flashcard = this.flashcards[this.index];
    return flashcard;
  }

  nextQuestion() {
    this.index++;
    if (this.index >= this.flashcards.length) {
      this.index = 0;
    }
  }

  ok() {
    const flashcard = this.flashcards[this.index];
    flashcard.studyHistory.ok();
  }

  ko() {
    const flashcard = this.flashcards[this.index];
    flashcard.studyHistory.ko();
  }

  private getQuiz(): Flashcard[] {
    const flashcards = this.flashcardService.getFlashcards();
    this.shuffle(flashcards);
    flashcards.forEach(flashcard => {
      flashcard.studyHistory = new FlashcardStudyHistory();
    });
    return flashcards;
  }

  private shuffle(flashcards: Flashcard[]) {
    for (let i = flashcards.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const itemAtIndex = flashcards[randomIndex];
      flashcards[randomIndex] = flashcards[i];
      flashcards[i] = itemAtIndex;
    }
  }
}
