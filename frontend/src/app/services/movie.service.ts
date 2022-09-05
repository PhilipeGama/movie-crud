import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EMPTY, Observable } from 'rxjs';
import Movie from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie> {
    return this.http.get<Movie>(`${environment.baseApiUrl}/movies`);
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${environment.baseApiUrl}/movies`, movie);
  }

  update(formData: FormData, id: number): Observable<Movie>{
    const url = `${environment.baseApiUrl}/movies/${id}`;
    return this.http.put<Movie>(url, formData);
  }

  delete(id): Observable<Movie>{
    const url = `${environment.baseApiUrl}/movies/${id}`;
    return this.http.delete<Movie>(url);
  }

  errorHandler(e: any): Observable<any> {
    alert(e.message);
    return EMPTY;
  }
}


