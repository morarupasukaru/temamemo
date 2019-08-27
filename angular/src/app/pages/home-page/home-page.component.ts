import { Component, OnInit } from '@angular/core';
import { StudyLevelService } from '../../widgets/study-level/study-level.service';
import { QuizService } from 'src/app/services/quiz-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  studyStarted = false;
  hasToLearn = true;
  displayNothingToLearnAlert = false;
  displayCongratulationAlert = false;

  constructor(private studyLevelService: StudyLevelService, private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    const studyLevel = this.studyLevelService.studyLevel;
    this.studyStarted = studyLevel.level > 1 || studyLevel.progress !== 0;
    this.hasToLearn = this.quizService.getQuiz().hasToLearn;
    this.displayCongratulationAlert = !this.hasToLearn;
    if (this.displayCongratulationAlert) {
      setTimeout(() => {
        this.displayCongratulationAlert = false;
      }, 5000);
      }
  }

  study() {
    if (this.hasToLearn) {
      this.router.navigate(['quiz']);
    } else {
      this.displayNothingToLearnAlert = true;
      setTimeout(() => {
        this.displayNothingToLearnAlert = false;
      }, 5000);
    }
  }
}
