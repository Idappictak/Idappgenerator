import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbmComponent } from './footerbm.component';

describe('FooterbmComponent', () => {
  let component: FooterbmComponent;
  let fixture: ComponentFixture<FooterbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
