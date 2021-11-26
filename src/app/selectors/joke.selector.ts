import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeOfDay } from '../models/joke-of-day';
import { JokeService } from '../services/joke.service';

@Injectable({
  providedIn: 'root'
})
export class JokeSelector {

  constructor(
    private jokeService: JokeService
  ) { }

  get jokeOfTheDay$(): Observable<JokeOfDay | null> {
    return this.jokeService.jokeOfTheDay$;
  }
}
