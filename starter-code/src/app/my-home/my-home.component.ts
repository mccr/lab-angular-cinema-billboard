import { Component, OnInit } from '@angular/core';
import { Cinema } from '../../services/Cinema.service';


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [Cinema]
})
export class MyHomeComponent implements OnInit {
  movies: Array<Object>;

  constructor(public service: Cinema) { }

  ngOnInit() {
    this.movies = this.service.getMovies();
  }
}
