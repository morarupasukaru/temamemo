import { Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard';
import { FlashcardItem } from '../models/flashcard-item';

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
        question: [FlashcardItem.buildText({ text: 'What is the capital of Switzerland ?' })],
        answer: [FlashcardItem.buildText({ text: 'Bern', centered: true, bigText: true })]
      },
      {
        topic: 'Multiplication table',
        question: [FlashcardItem.buildText({ text: '6 x 2 ?', centered: true, bigText: true })],
        answer: [FlashcardItem.buildText({ text: '12', centered: true, bigText: true })]
      },
      {
        topic: 'Hiragana to Rōmaji',
        question: [FlashcardItem.buildText({ text: 'あ', centered: true, bigText: true })],
        answer: [FlashcardItem.buildText({ text: 'a', centered: true, bigText: true }),
        FlashcardItem.buildLink({ url: 'https://en.wikipedia.org/wiki/Hiragana', description: 'See on wikipedia' })]
      },
      {
        topic: 'Flags of Swiss Cantons',
        question: [
          FlashcardItem.buildText({ text: 'Which Swiss Canton belong this flag?' }),
          FlashcardItem.buildImage({
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Flag_of_Canton_of_Neuch%C3%A2tel.svg',
            width: '100px'})],
        answer: [
          FlashcardItem.buildText({ text: 'Neuchâtel', centered: true, bigText: true }),
          FlashcardItem.buildLink({
            url: 'https://en.wikipedia.org/wiki/Flags_and_arms_of_cantons_of_Switzerland',
            description: 'See on wikipedia' })]
      },
      {
        topic: 'German Listening',
        question: [
          FlashcardItem.buildText({ text: 'What is said?', centered: true }),
          FlashcardItem.buildSound({ url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/De-Kamm.ogg', mediatype: 'audio/ogg'})],
        answer: [
          FlashcardItem.buildText({ text: 'Kamm', centered: true, bigText: true}),
          FlashcardItem.buildLink({ url: 'https://dict.leo.org/german-english/kamm', description: 'See leo.org entry'})
        ]
      }
    ];
    flashcards = flashcards.slice();
    return flashcards;
  }
}
