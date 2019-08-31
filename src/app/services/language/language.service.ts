import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Language } from './language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languages: Language[] = [
    {code: 'de', description: 'Deutsch' },
    {code: 'en', description: 'English', active: true },
    {code: 'fr', description: 'Français' },
    {code: 'it', description: 'Italieno' },
  ];
  languageSubject = new Subject<Language[]>();

  // TODO retrieve language from browser if not set
  // save/load current language from localStorage

  constructor() {
  }

  setCurrentLanguage(newCurrentLanguage: Language) {
    this.languages.forEach((language) => {
      language.active = language.code === newCurrentLanguage.code;
    });
    this.languageSubject.next(this.getLanguages());
  }

  getLanguages(): Language[] {
    return this.languages.slice();
  }
}
