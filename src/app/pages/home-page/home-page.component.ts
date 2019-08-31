import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LevelProgressService } from '../../widgets/level-progress/level-progress.service';
import { QuizService } from '../../services/quiz/quiz-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  studyStarted = false;
  hasToLearn = true;
  displayNothingToLearnAlert = false;
  displayCongratulationAlert = false;
  notYetImplementedMessage: string;

  constructor(private levelProgressService: LevelProgressService, private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    const levelProgress = this.levelProgressService.levelProgress;
    this.studyStarted = levelProgress.level > 1 || levelProgress.progress !== 0;
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

  chooseTopics() {
    // TODO decice when chooseTopics must be visible
    // this.notYetImplementedMessage = '"Choose Topics" is not implemented yet';
    this.router.navigate(['topics']);
  }

  editTopics() {
    // TODO decice when editTopics must be visible
    this.notYetImplementedMessage = '"Edit Topics" is not implemented yet';
  }

  showOptions() {
    // TODO decice when showOptions must be visible
    // this.notYetImplementedMessage = '"Show Options" is not implemented yet';
    this.router.navigate(['options']);
  }
}
