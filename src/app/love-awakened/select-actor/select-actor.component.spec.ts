import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectActorComponent } from './select-actor.component';

describe('SelectActorComponent', () => {
  let component: SelectActorComponent;
  let fixture: ComponentFixture<SelectActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
