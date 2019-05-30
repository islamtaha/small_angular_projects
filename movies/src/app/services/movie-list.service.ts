import { MovieList } from '../shared/movie-list.model';
import { Injectable } from '@angular/core';
import { HttpMovieService } from './http-movie.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieListService {
    movieList: MovieList[] = [];
    year: number;
    sortBy: string;
    genre: number;
    page: number;
    totalPages: number;
    movieListChanged = new Subject<MovieList[]>();
    totalPagesChanged = new Subject<number>();

    constructor (private httpMovieService: HttpMovieService) {}

    addListMovies(year: number, sortBy: string, genre: number, page: number){
        this.year = year;
        this.sortBy = sortBy;
        this.genre = genre;
        this.page = page;
        this.httpMovieService.getMovieListWithPage(year, sortBy, genre, page)
        .subscribe(
            (response: Response) => {
                console.log(response);
                let listHelper: MovieList[] = [];
                let i: number = 0;
                this.totalPages = response['total_pages']*20;
                for(let res of response['results']){
                    listHelper.push(new MovieList(  res['id'],
                                                    res['title'], 
                                                    res['poster_path'], 
                                                    res['vote_average'],
                                                    res['overview'],
                                                    res['release_date'],
                                                    i));
                    i++;
                }    
                this.movieList = listHelper.slice();
                this.movieListChanged.next(this.movieList.slice());
                this.totalPagesChanged.next(this.totalPages);
            },
            (error) => {
                if(error.statusText === "Unauthorized")
                alert("Wrong Api Key \nPlease enter a correct one\n\nNOTE:\nYou can obtain api key by creating a new account in themoviedb.org");
            }
        );
    }

    getMovieList(){
        return this.movieList.slice();
    }

}