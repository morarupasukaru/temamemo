import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LevelProgress } from './level-progress';
import { LevelProgressService } from './level-progress.service';

@Component({
  selector: 'app-level-progress',
  templateUrl: './level-progress.component.html'
})
export class LevelProgressComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  levelProgress: LevelProgress;

  constructor(private levelProgressService: LevelProgressService) { }

  ngOnInit() {
    this.levelProgress = this.levelProgressService.levelProgress;

    this.subscription = this.levelProgressService.levelProgressSubject.subscribe(levelProgress => {
      this.levelProgress = levelProgress;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
