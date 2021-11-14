import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogImage = '../../../assets/images/blog_image.jpg';
  blogPostImage = '../../../assets/images/you_are_here.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
