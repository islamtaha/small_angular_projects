import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieListService } from '../services/movie-list.service';
import { MovieList } from '../shared/movie-list.model';
import { Subscription } from 'rxjs';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [NgbPaginationConfig]
})
export class MovieListComponent implements OnInit, OnDestroy {
  movieList: MovieList[];
  subscriptionMoviesChanged: Subscription;
  subscriptionTotalPagesChanged: Subscription;
  movieMouseOverList: boolean[] = [];
  size = 4;
  page: number = 1;
  totalPages: number;

  constructor(public movieListService: MovieListService,
              config: NgbPaginationConfig) {
                config.pageSize = 20;
                config.maxSize = 10;
              }

  ngOnInit() {
    this.subscriptionMoviesChanged = this.movieListService.movieListChanged
    .subscribe(
      (movieList: MovieList[]) => {
        this.movieList = movieList;
        this.movieMouseOverList = [];
        for(let i = 0; i < this.movieList.length; i++){
          this.movieMouseOverList.push(false);
        }
      } 
    );
    this.subscriptionTotalPagesChanged = this.movieListService.totalPagesChanged
    .subscribe(
      (totalPages: number) => {
        this.totalPages = totalPages;
      }
    );
    
    this.movieList = this.movieListService.getMovieList();
    this.totalPages = this.movieListService.totalPages;
    this.movieMouseOverList = [];
    for(let i = 0; i < this.movieList.length; i++){
      this.movieMouseOverList.push(false);
    }
  }

  ngOnDestroy(){
    this.subscriptionMoviesChanged.unsubscribe();
    this.subscriptionTotalPagesChanged.unsubscribe();
  }

  getMovies(index: number){
    if(this.movieList.length > 0){
      //console.log(this.totalPages);
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

  onPageChanged(page: number){
    console.log(page);
    this.movieListService.addListMovies(this.movieListService.year,
                                        this.movieListService.sortBy,
                                        this.movieListService.genre,
                                        page);
  }

}
