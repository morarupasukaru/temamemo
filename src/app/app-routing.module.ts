import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { ChooseTopicsPageComponent } from './pages/choose-topics-page/choose-topics-page.component';
import { OptionsPageComponent } from './pages/options-page/options-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'quiz', component: QuizPageComponent},
  { path: 'topics', component: ChooseTopicsPageComponent},
  { path: 'options', component: OptionsPageComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
