import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { StudyLevelComponent } from './widgets/study-level/study-level.component';
import { StopwatchComponent } from './widgets/stopwatch/stopwatch.component';
import { QuizProgressComponent } from './widgets/quiz-progress/quiz-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    QuizPageComponent,
    StudyLevelComponent,
    StopwatchComponent,
    QuizProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
