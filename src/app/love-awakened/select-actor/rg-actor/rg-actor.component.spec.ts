import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgActorComponent } from './rg-actor.component';

describe('RgActorComponent', () => {
  let component: RgActorComponent;
  let fixture: ComponentFixture<RgActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
