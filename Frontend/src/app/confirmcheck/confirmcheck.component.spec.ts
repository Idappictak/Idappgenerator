import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmcheckComponent } from './confirmcheck.component';

describe('ConfirmcheckComponent', () => {
  let component: ConfirmcheckComponent;
  let fixture: ComponentFixture<ConfirmcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
