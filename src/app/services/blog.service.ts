import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiURL = environment.api;
  constructor(
    private http: HttpClient
  ) { }

  get posts$(): Observable<Post[] | null> {
    return this.http.get<Post[]>(`${this.apiURL}/blog/v2/posts`)
      .pipe(catchError(() => of(null)))
  }
}
