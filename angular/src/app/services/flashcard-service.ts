import { Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  constructor() { }


  getFlashcards(): Flashcard[] {
    // TODO retrieve from http
    let flashcards: Flashcard[];
    flashcards = [
      {
        topic: 'Capital',
        question: [{ text: 'What is the capital of Switzerland ?' }],
        answer: [{ text: 'Bern', centered: true }]
      },
      {
        topic: 'Multiplication table',
        question: [{ text: '6 x 2 ?', centered: true, big: true }],
        answer: [{ text: '12', centered: true, big: true }]
      },
      {
        topic: 'Hiragana to Rōmaji',
        question: [{ text: 'あ', centered: true, big: true }],
        answer: [{ text: 'a', centered: true, big: true }]
      },

      {
        topic: 'Flags of Swiss Cantons',
        question: [
          { text: 'Which Swiss Canton belong this flag?' },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Flag_of_Canton_of_Neuch%C3%A2tel.svg', width: 'width: 100px'
          }],
        answer: [
          { text: 'Neuchâtel' },
          { url: 'https://en.wikipedia.org/wiki/Flags_and_arms_of_cantons_of_Switzerland', description: 'See on wikipedia' }]
      },
      {
        topic: 'German Listening',
        question: [
          { text: 'What is said?' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/De-Kamm.ogg', mediatype: 'audio/ogg'}],
        answer: [
          { text: 'Kamm'},
          { url: 'https://dict.leo.org/german-english/kamm', description: 'See leo.org entry'}
        ]
      }
    ];
    flashcards = flashcards.slice();
    return flashcards;
  }
}
