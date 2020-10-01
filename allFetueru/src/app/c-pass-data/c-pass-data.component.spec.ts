import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPassDataComponent } from './c-pass-data.component';

describe('CPassDataComponent', () => {
  let component: CPassDataComponent;
  let fixture: ComponentFixture<CPassDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPassDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPassDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
