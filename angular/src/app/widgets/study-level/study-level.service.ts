import { Injectable } from '@angular/core';
import { StudyLevel } from '../../models/study-level';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudyLevelService {

  studyLevel: StudyLevel = new StudyLevel();
  studyLevelSubject = new Subject<StudyLevel>();

  increaseXp() {
    this.studyLevel.increaseXp();
    this.studyLevelSubject.next(this.studyLevel);
  }
}
