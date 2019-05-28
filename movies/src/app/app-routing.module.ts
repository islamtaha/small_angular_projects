import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieStartComponent } from './movie-start/movie-start.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: MovieStartComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
