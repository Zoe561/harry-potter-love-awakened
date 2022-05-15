import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LKActorComponent } from './lk-actor.component';

describe('LKActorComponent', () => {
  let component: LKActorComponent;
  let fixture: ComponentFixture<LKActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LKActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LKActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
