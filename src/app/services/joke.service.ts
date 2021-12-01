import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JokeOfDay } from '../models/joke-of-day';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  url = environment.jokeoneURL;
  constructor(
    private http: HttpClient
  ) { }

  get jokeOfTheDay$(): Observable<JokeOfDay | null> {
    return this.http.get<JokeOfDay>(this.url)
      .pipe(
        catchError(() => of(null)))
  }
}
