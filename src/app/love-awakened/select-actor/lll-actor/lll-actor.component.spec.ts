import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LllActorComponent } from './lll-actor.component';

describe('LllActorComponent', () => {
  let component: LllActorComponent;
  let fixture: ComponentFixture<LllActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LllActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LllActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
