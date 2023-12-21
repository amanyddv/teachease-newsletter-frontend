import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberformComponent } from './subscriberform.component';

describe('SubscriberformComponent', () => {
  let component: SubscriberformComponent;
  let fixture: ComponentFixture<SubscriberformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriberformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
