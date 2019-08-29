import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'quiz', component: QuizPageComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
