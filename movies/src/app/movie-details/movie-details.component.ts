import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../shared/movie-detail.model';
import { HttpMovieService } from '../services/http-movie.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: number;
  movieDetail: MovieDetail;

  constructor(private httpMovieService: HttpMovieService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.httpMovieService.getMovie(this.id)
          .subscribe(
            (movie: MovieDetail) => {
              this.movieDetail = movie;
            }
          );
        }
      );
  }

}
