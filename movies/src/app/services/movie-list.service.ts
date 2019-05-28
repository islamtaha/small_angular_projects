import { MovieList } from '../shared/movie-list.model';
import { Injectable } from '@angular/core';
import { HttpMovieService } from './http-movie.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieListService {
    movieList: MovieList[] = [];
    movieListChanged = new Subject<MovieList[]>();

    constructor (private httpMovieService: HttpMovieService) {}

    addListMovies(year: number, sortBy: string, genre: number){
        this.httpMovieService.getMovieList(year, sortBy, genre)
        .subscribe(
            (response: Response) => {
                console.log(response);
                let listHelper: MovieList[] = [];
                for(let res of response['results']){
                    listHelper.push(new MovieList(  res['id'],
                                                    res['title'], 
                                                    res['poster_path'], 
                                                    res['vote_average'],
                                                    res['overview'],
                                                    res['release_date']));
                }    
                this.movieList = listHelper.slice();
                this.movieListChanged.next(this.movieList.slice());
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