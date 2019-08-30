import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LevelProgress } from './level-progress';

@Injectable({
  providedIn: 'root'
})
export class LevelProgressService {

  levelProgress: LevelProgress = new LevelProgress();
  levelProgressSubject = new Subject<LevelProgress>();

  increaseXp() {
    this.levelProgress.increaseXp();
    this.levelProgressSubject.next(this.levelProgress);
  }
}
