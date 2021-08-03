import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotuserComponent } from './notuser.component';

describe('NotuserComponent', () => {
  let component: NotuserComponent;
  let fixture: ComponentFixture<NotuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
