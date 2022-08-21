import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbmComponent } from './headerbm.component';

describe('HeaderbmComponent', () => {
  let component: HeaderbmComponent;
  let fixture: ComponentFixture<HeaderbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
