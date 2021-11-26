import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSideContentComponent } from './l-side-content.component';

describe('LSideContentComponent', () => {
  let component: LSideContentComponent;
  let fixture: ComponentFixture<LSideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSideContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
