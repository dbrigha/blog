import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  get posts$(): Observable<Post[] | null> {
    return this.http.get<Post[]>(`${this.url}/api/blog/v2/posts`)
      .pipe(
        catchError(() => of(null)))
  }
}
