import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-l-side-content',
  templateUrl: './l-side-content.component.html',
  styleUrls: ['./l-side-content.component.scss']
})
export class LSideContentComponent implements OnInit {
  githubIcon = "/assets/icons/GitHub-Mark-64px.png";
  linkedinIcon = "/assets/icons/In-Blue-72.png";
  githubLink = environment.github;
  linkedinLink = environment.linkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
