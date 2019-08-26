import { FlashcardStudyHistory } from './flashcard-study-history';

export class Flashcard {
  question: string;
  answer: string;
  topic: string;
  countOk?: 0;
  maxCountOk?: 0;
  studyHistory?: FlashcardStudyHistory;
}
