import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeSphereComponent } from './subscribe-sphere.component';

describe('SubscribeSphereComponent', () => {
  let component: SubscribeSphereComponent;
  let fixture: ComponentFixture<SubscribeSphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeSphereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeSphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
