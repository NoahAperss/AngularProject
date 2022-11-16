import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>("http://localhost:3000/articles");
  }

  GetMovieById(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>("http://localhost:3000/articles/" + id);
  }

  GetMovieByName(name: string) : Observable<Movie[]> {
    return this.httpClient.get<Movie[]>("https://api.themoviedb.org/3/search/movie?api_key={fffd20b75c07951a887dddc7fbc38b12}&query=" + name);

  }

  }


