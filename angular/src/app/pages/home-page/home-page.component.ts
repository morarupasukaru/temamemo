import { Component, OnInit } from '@angular/core';
import { StudyLevelService } from '../../widgets/study-level/study-level.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  studyStarted = false;

  constructor(private studyLevelService: StudyLevelService) { }

  ngOnInit() {
    const studyLevel = this.studyLevelService.studyLevel;
    this.studyStarted = studyLevel.level > 1 || studyLevel.progress !== 0;
  }
}
