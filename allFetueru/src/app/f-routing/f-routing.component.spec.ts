import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FRoutingComponent } from './f-routing.component';

describe('FRoutingComponent', () => {
  let component: FRoutingComponent;
  let fixture: ComponentFixture<FRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
