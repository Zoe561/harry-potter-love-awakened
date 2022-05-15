import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsActorComponent } from './als-actor.component';

describe('AlsActorComponent', () => {
  let component: AlsActorComponent;
  let fixture: ComponentFixture<AlsActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
