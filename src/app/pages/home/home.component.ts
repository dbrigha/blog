import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/models/post';
import { BlogSelector } from 'src/app/selectors/blog.selector';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogImage = 'assets/images/blog_image.jpg';
  blogPostImage = 'assets/images/you_are_here.jpg';
  githubIcon = "/assets/icons/GitHub-Mark-64px.png";
  linkedinIcon = "/assets/icons/In-Blue-72.png";
  githubLink = environment.github;
  linkedinLink = environment.linkedin;

  posts$: Observable<Post[] | null> = of(null);
  constructor(
    private blogSelector: BlogSelector
  ) { }

  ngOnInit(): void {
    this.posts$ = this.blogSelector.posts$;
  }

}
