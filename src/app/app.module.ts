import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { LevelProgressComponent } from './widgets/level-progress/level-progress.component';
import { TrophiesProgressComponent } from './widgets/trophies-progress/trophies-progress.component';
import { FlashcardComponent } from './pages/quiz-page/flashcard/flashcard.component';
import { StateComponent } from './pages/quiz-page/state/state.component';
import { StopwatchComponent } from './pages/quiz-page/stopwatch/stopwatch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    QuizPageComponent,
    LevelProgressComponent,
    TrophiesProgressComponent,
    FlashcardComponent,
    StateComponent,
    StopwatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
