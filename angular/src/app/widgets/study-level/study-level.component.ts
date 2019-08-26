import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudyLevelService } from './study-level.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-study-level',
  templateUrl: './study-level.component.html',
  styleUrls: ['./study-level.component.css']
})
export class StudyLevelComponent implements OnInit, OnDestroy {

  level = 1;
  progress = 0;
  subscription: Subscription;

  constructor(private studyLevelService: StudyLevelService) { }

  ngOnInit() {
    const studyLevel = this.studyLevelService.studyLevel;
    this.level = studyLevel.level;
    this.progress = studyLevel.progress;

    this.subscription = this.studyLevelService.studyLevelSubject.subscribe(studyLevel => {
      this.level = studyLevel.level;
      this.progress = studyLevel.progress;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
