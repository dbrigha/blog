import { TestBed } from '@angular/core/testing';

import { BlogSelector } from './blog.selector';

describe('BlogService', () => {
  let service: BlogSelector;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogSelector);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
