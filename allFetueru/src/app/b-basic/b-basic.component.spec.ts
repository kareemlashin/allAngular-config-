import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBasicComponent } from './b-basic.component';

describe('BBasicComponent', () => {
  let component: BBasicComponent;
  let fixture: ComponentFixture<BBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
