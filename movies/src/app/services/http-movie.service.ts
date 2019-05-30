import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MovieDetail } from '../shared/movie-detail.model';

import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpMovieService {
    apiKey = "";
    
    constructor(private httpClient: HttpClient) {}

    getMovie(id: number){
        return this.httpClient.get<MovieDetail>('https://api.themoviedb.org/3/movie/'+id+'?api_key=' + this.apiKey);
    }

    setApiKey(apiKey: string){
        this.apiKey = apiKey;
    }

    getApiKey(){
        return this.apiKey;
    }

    getMovieListWithPage(year: number, sortBy: string, genre: number, page: number){
        if(genre === null){
            return this.httpClient.get('https://api.themoviedb.org/3/discover/movie?primary_release_year=' + year + "&page=" + page + '&sort_by=' + sortBy + '&api_key=' + this.apiKey);
        } 
        return this.httpClient.get('https://api.themoviedb.org/3/discover/movie?primary_release_year=' + year + "&page=" + page + '&sort_by=' + sortBy + '&with_genres=' + genre + '&api_key=' + this.apiKey);
    }
}