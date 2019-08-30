import { Injectable } from '@angular/core';
import { FlashcardService } from '../flashcards/flashcard-service';
import { StudyHistory } from './study-history';
import { Quiz } from './quiz';
import { QuizItem } from './quiz-item';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quiz: Quiz;

  constructor(private flashcardService: FlashcardService) { }

  getQuiz() {
    if (!this.quiz) {
      this.quiz = new Quiz(this.getItems());
    }
    return this.quiz;
  }

  private getItems(): QuizItem[] {
    const flashcards = this.flashcardService.getFlashcards();
    const items: QuizItem[] = [];
    flashcards.forEach(flashcard => {
      items.push({ flashcard, studyHistory: new StudyHistory() });
    });
    this.shuffle(items);
    return items;
  }

  private shuffle(items: QuizItem[]) {
    for (let i = items.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const itemAtIndex = items[randomIndex];
      items[randomIndex] = items[i];
      items[i] = itemAtIndex;
    }
  }
}
