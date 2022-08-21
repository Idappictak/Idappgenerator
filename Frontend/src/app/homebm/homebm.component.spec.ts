import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebmComponent } from './homebm.component';

describe('HomebmComponent', () => {
  let component: HomebmComponent;
  let fixture: ComponentFixture<HomebmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomebmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
