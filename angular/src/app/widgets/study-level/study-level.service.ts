import { Injectable } from '@angular/core';
import { StudyLevel } from '../../models/study-level';
import { Flashcard } from 'src/app/models/flashcard';

@Injectable({
  providedIn: 'root'
})
export class StudyLevelService {

  studyLevel: StudyLevel = new StudyLevel();

  increaseXp() {
    this.studyLevel.increaseXp();
  }
}
