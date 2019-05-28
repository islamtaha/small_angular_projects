import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieListService } from '../services/movie-list.service';
import { MovieList } from '../shared/movie-list.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movieList: MovieList[];
  subscription: Subscription;
  

  constructor(private movieListService: MovieListService) { }

  ngOnInit() {
    this.subscription = this.movieListService.movieListChanged
    .subscribe(
      (movieList: MovieList[]) => {
        this.movieList = movieList;
      } 
    );
    this.movieList = this.movieListService.getMovieList();  
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  getMovie(index: number){
    return this.movieList[index];
  }

}
