import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostnewsletterComponent } from './postnewsletter.component';

describe('PostnewsletterComponent', () => {
  let component: PostnewsletterComponent;
  let fixture: ComponentFixture<PostnewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostnewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostnewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
