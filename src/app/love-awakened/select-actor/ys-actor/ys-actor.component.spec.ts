import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YsActorComponent } from './ys-actor.component';

describe('YsActorComponent', () => {
  let component: YsActorComponent;
  let fixture: ComponentFixture<YsActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YsActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YsActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
