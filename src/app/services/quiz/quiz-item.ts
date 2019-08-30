import { Flashcard } from '../flashcards/flashcard';
import { StudyHistory } from './study-history';

export class QuizItem {
  readonly flashcard: Flashcard;
  readonly studyHistory: StudyHistory;
}
