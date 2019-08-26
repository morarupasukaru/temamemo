import { Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  constructor() { }


  getFlashcards(): Flashcard[] {
    // TODO retrieve from http
    let flashcards = [
      { question: 'What is the capital of Austria ?', answer: 'Vienna', topic: 'Capital' },
      { question: 'What is the capital of France ?', answer: 'Paris', topic: 'Capital'  },
      { question: 'What is the capital of Germany ?', answer: 'Berlin', topic: 'Capital'  },
      { question: 'What is the capital of Italy ?', answer: 'Rome', topic: 'Capital'  },
      { question: 'What is the capital of Luxembourg ?', answer: 'Luxembourg', topic: 'Capital'  },
      { question: 'What is the capital of Switzerland ?', answer: 'Bern', topic: 'Capital'  },
      { question: '1 X 2 ?', answer: '2', topic: 'Multiplication table' },
      { question: '2 X 2 ?', answer: '4', topic: 'Multiplication table' },
      { question: '3 X 2 ?', answer: '6', topic: 'Multiplication table' },
      { question: '4 X 2 ?', answer: '8', topic: 'Multiplication table' },
      { question: '5 X 2 ?', answer: '10', topic: 'Multiplication table' },
      { question: '6 X 2 ?', answer: '12', topic: 'Multiplication table' },
      { question: '7 X 2 ?', answer: '14', topic: 'Multiplication table' },
      { question: '8 X 2 ?', answer: '16', topic: 'Multiplication table' },
      { question: '9 X 2 ?', answer: '18', topic: 'Multiplication table' },
      { question: '10 X 2 ?', answer: '20', topic: 'Multiplication table' },
      { question: 'What is the rōmaji of あ ?', answer: 'a', topic: 'Hiragana' },
      { question: 'What is the rōmaji of い ?', answer: 'i', topic: 'Hiragana' },
      { question: 'What is the rōmaji of う ?', answer: 'u', topic: 'Hiragana' },
      { question: 'What is the rōmaji of え ?', answer: 'e', topic: 'Hiragana' },
      { question: 'What is the rōmaji of お ?', answer: 'o', topic: 'Hiragana' }
    ];
    flashcards = flashcards.slice();
    return flashcards;
  }
}
