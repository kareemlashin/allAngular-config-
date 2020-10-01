import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFormComponent } from './e-form.component';

describe('EFormComponent', () => {
  let component: EFormComponent;
  let fixture: ComponentFixture<EFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
