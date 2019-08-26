import { Component, OnInit } from '@angular/core';
import { StudyLevelService } from './study-level.service';

@Component({
  selector: 'app-study-level',
  templateUrl: './study-level.component.html',
  styleUrls: ['./study-level.component.css']
})
export class StudyLevelComponent implements OnInit {

  level = 1;
  progress = 0;

  constructor(private studyLevelService: StudyLevelService) { }

  ngOnInit() {
    this.level = this.studyLevelService.studyLevel.level;
    this.progress = this.studyLevelService.studyLevel.progress;
  }
}
