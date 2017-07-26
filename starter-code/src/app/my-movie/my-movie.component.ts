import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cinema } from '../../services/Cinema.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movieId: number;

  constructor(private route: ActivatedRoute, public service: Cinema) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
  }

  

}
