import { Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard';
import { FlashcardService } from './flashcard-service';
import { FlashcardStudyHistory } from '../models/flashcard-study-history';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quiz: Quiz;

  constructor(private flashcardService: FlashcardService) { }

  getQuiz() {
    if (!this.quiz) {
      this.quiz = new Quiz(this.getFlashcards());
    }
    return this.quiz;
  }

  private getFlashcards(): Flashcard[] {
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
