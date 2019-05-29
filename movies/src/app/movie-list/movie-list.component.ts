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
  movieMouseOverList: boolean[] = [];
  size = 4;

  constructor(private movieListService: MovieListService) { }

  ngOnInit() {
    this.subscription = this.movieListService.movieListChanged
    .subscribe(
      (movieList: MovieList[]) => {
        this.movieList = movieList;
        this.movieMouseOverList = [];
        for(let i = 0; i < this.movieList.length; i++){
          this.movieMouseOverList.push(false);
        }
      } 
    );
    this.movieList = this.movieListService.getMovieList();
    this.movieMouseOverList = [];
    for(let i = 0; i < this.movieList.length; i++){
      this.movieMouseOverList.push(false);
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  getMovies(index: number){
    if(this.movieList.length > 0){
    const x = index*this.size+this.size;
    // console.log(index*this.size+" "+x);
    //console.log(this.movieList.slice(index*this.size, index*this.size+this.size));
    return this.movieList.slice(index*this.size, index*this.size+this.size);
  }
  }

  onMouseEnter(index: number){
    this.movieMouseOverList[index] = true;
  }

  onMouseLeave(index: number){
    this.movieMouseOverList[index] = false;
  }

  movieMouseOver(index: number){
  //  console.log("hello");
    return this.movieMouseOverList[index];
  }

  shortenOverview(overview: string){
    if(overview.length > 140){
      return overview.slice(0, 140)+ "...(more)";
    }else{
      return overview;
    }
  }

}
