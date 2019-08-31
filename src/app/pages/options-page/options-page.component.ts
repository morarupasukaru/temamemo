import { Component, OnInit, OnDestroy } from '@angular/core';
import { Language } from 'src/app/services/language/language';
import { LanguageService } from 'src/app/services/language/language.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-page',
  templateUrl: './options-page.component.html',
  styleUrls: ['./options-page.component.css']
})
export class OptionsPageComponent implements OnInit, OnDestroy {

  languages: Language[];
  subscription: Subscription;

  constructor(private languageService: LanguageService, private router: Router) { }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
    this.subscription = this.languageService.languageSubject.subscribe((languages: Language[]) => {
      this.languages = languages;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  select(language: Language) {
    this.languageService.setCurrentLanguage(language);
  }

  back() {
    this.router.navigate(['']);
  }
}
