import { Injectable } from '@angular/core';
import { moviesSample } from '../sample-movies';

export class Movie {
  constructor(public id:number, public title:string, public poster: string, public synopsis:string, public genres:Array<string>, public year:number, public director:string, public actors:Array<string>, hours: Array<string>, room:number) {}
}

@Injectable()
export class Cinema {
    movies: Array<Movie> = moviesSample;

    constructor() { }

    getMovies() {
      return this.movies;
    }

    getMovie(id:number): any {
      return this.movies.forEach( movie => {
        if(movie.id === id) return movie;
      });
    }
}
