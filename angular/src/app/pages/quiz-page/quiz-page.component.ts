import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  question: string;
  answer: string;
  answerDisplayed = false;

  constructor() { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.question = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    this.answer = "Answer: " + this.question;
    this.answerDisplayed = false;
  }

  displayAnswer() {
    this.answerDisplayed = true;
  }

  skipQuestion() {
    this.initData();
  }

  ok() {
    this.initData();
  }

  ko() {
    this.initData();
  }
}
