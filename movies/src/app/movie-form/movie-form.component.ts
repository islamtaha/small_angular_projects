import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieListService } from '../services/movie-list.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  yearList: number[];
  genresQueryList: number[];
  genresList: string[];
  sortByQueryList: string[];
  sortByList: string[];
  movieForm = new FormGroup({
    year: new FormControl(null),
    sortBy: new FormControl(null),
    genres: new FormControl(null),
  });

  constructor(private movieListService: MovieListService) { }

  ngOnInit() {
    this.yearList = [];
    for (let i = 2019; i >= 1900; i--) {
      this.yearList.push(i);
    }

    this.genresQueryList = [28, 12, 16, 35, 80,
                            99, 18, 10751, 14, 36,
                            27, 10402, 9648, 10749, 878, 
                            10770, 53, 10752, 37 ];

    this.genresList = [ 'Action', 'Adventure', 'Animation', 'Comedy',
                        'Crime', 'Documentary', 'Drama', 'Family',
                        'Fantasy', 'History', 'Horror', 'Music',
                        'Mystery', 'Romance', 'Science Fiction', 'TV Movie',
                        'Thriller', 'War', 'Western'];

    this.sortByQueryList = [ "popularity.desc", 
                              "popularity.asc", 
                              "vote_average.desc", 
                              "vote_average.asc",
                              "primary_release_date.desc",
                              "primary_release_date.asc", 
                              "title.asc",
                              "title.desc"];

  this.sortByList = [ 'Popularity Descending', 
                      'Popularity Ascending', 
                      'Rating Descending', 
                      'Rating Ascending',
                      'Release Date Descending',
                      'Release Date Ascending', 
                      'Title(A - Z)',
                      'Title (Z-A)'];
  }

  changeYear(year: number){
    this.movieListService.addListMovies(this.movieForm.value.year, 
                                        this.movieForm.value.sortBy,
                                        this.movieForm.value.genres);
  }

  changeSortBy(sortBy: string){
    this.movieListService.addListMovies(this.movieForm.value.year, 
                                        this.movieForm.value.sortBy,
                                        this.movieForm.value.genres);
  }

  changeRenres(renre: number){
    this.movieListService.addListMovies(this.movieForm.value.year, 
                                        this.movieForm.value.sortBy,
                                        this.movieForm.value.genres);
  }

}
