import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuedopComponent } from './continuedop.component';

describe('ContinuedopComponent', () => {
  let component: ContinuedopComponent;
  let fixture: ComponentFixture<ContinuedopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinuedopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuedopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
