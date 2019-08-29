import { Injectable } from '@angular/core';
import { FlashcardService } from './flashcard-service';
import { StudyHistory } from '../models/study-history';
import { Quiz } from '../models/quiz';
import { QuizItem } from '../models/quiz-item';

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
