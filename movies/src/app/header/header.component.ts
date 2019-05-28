import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpMovieService } from '../services/http-movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private httpMovieService: HttpMovieService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.httpMovieService.setApiKey(form.value.apiKey);
    form.reset();
  }
}
