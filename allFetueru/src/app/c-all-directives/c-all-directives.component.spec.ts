import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAllDirectivesComponent } from './c-all-directives.component';

describe('CAllDirectivesComponent', () => {
  let component: CAllDirectivesComponent;
  let fixture: ComponentFixture<CAllDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAllDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAllDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
