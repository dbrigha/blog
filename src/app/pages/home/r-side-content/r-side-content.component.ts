import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JokeOfDay } from 'src/app/models/joke-of-day';
import { JokeSelector } from 'src/app/selectors/joke.selector';

@Component({
  selector: 'app-r-side-content',
  templateUrl: './r-side-content.component.html',
  styleUrls: ['./r-side-content.component.scss']
})
export class RSideContentComponent implements OnInit {
  jokeOfTheDay$: Observable<JokeOfDay | null> = of(null);
  constructor(
    private jokeSelector: JokeSelector
  ) { }

  ngOnInit(): void {
    this.jokeOfTheDay$ = this.jokeSelector.jokeOfTheDay$;
  }

}
