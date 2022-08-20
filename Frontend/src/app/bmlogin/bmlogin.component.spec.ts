import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmloginComponent } from './bmlogin.component';

describe('BmloginComponent', () => {
  let component: BmloginComponent;
  let fixture: ComponentFixture<BmloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
