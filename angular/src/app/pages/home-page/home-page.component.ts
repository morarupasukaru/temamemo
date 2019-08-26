import { Component, OnInit } from '@angular/core';
import { StudyLevelService } from '../../widgets/study-level/study-level.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  studyStarted: boolean;

  constructor(private studyLevelService: StudyLevelService, private router: Router) { }

  ngOnInit() {
    const studyLevel = this.studyLevelService.studyLevel;
    this.studyStarted = studyLevel.level > 1 || studyLevel.progress !== 0;
  }

  study() {
    this.router.navigate(['quiz']);
  }
}
