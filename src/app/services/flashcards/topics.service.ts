import { Injectable } from '@angular/core';
import { Topic } from './topic';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor() { }

  getTopics(): Topic[] {
    const topics = [
      { parentTopic: 'German', topic: 'Vocabulary Lesson 1 Listening', flashcardsCount: 68, selected: true},
      { parentTopic: 'Japanese', topic: 'Hiragana to Rōmaji', flashcardsCount: 46, selected: true},
      { parentTopic: 'Japanese', topic: 'Katakana to Rōmaji', flashcardsCount: 46, selected: false},
      { parentTopic: 'Japanese', topic: 'Kanji 10 Kyuu', flashcardsCount: 80, selected: false},
      { parentTopic: 'Geography', topic: 'Capitals', flashcardsCount: 287, selected: false},
      { parentTopic: 'Geography', topic: 'Flags of Swiss Cantons', flashcardsCount: 26, selected: false},
      { parentTopic: 'Math - Times table', topic: 'Times table of 2', flashcardsCount: 10, selected: true},
      { parentTopic: 'Math - Times table', topic: 'Times table of 3', flashcardsCount: 10, selected: false},
      { parentTopic: 'Math - Times table', topic: 'Times table of 4', flashcardsCount: 10, selected: false}
    ];
    return topics.slice();
  }
}
