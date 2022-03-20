import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JokeOfDay } from 'src/app/models/joke-of-day';

@Component({
  selector: 'app-r-side-content',
  templateUrl: './r-side-content.component.html',
  styleUrls: ['./r-side-content.component.scss']
})
export class RSideContentComponent implements OnInit {
  jokeOfTheDay$: Observable<JokeOfDay | null> = of(null);
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
