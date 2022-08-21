import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplnsComponent } from './applns.component';

describe('ApplnsComponent', () => {
  let component: ApplnsComponent;
  let fixture: ComponentFixture<ApplnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
