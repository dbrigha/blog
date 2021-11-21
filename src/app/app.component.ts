import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './models/post';
import { BlogSelector } from './selectors/blog.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
