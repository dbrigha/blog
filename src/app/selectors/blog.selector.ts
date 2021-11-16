import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { BlogService } from '../services/blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogSelector {

  constructor(
    private blogService: BlogService
  ) { }

  get posts$(): Observable<Post[] | null> {
    return this.blogService.posts$;
  }
}
