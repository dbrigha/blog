import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSideContentComponent } from './r-side-content.component';

describe('RSideContentComponent', () => {
  let component: RSideContentComponent;
  let fixture: ComponentFixture<RSideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSideContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RSideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
