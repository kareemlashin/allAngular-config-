import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GAnimationComponent } from './g-animation.component';

describe('GAnimationComponent', () => {
  let component: GAnimationComponent;
  let fixture: ComponentFixture<GAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
