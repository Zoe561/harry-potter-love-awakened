import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CIActorComponent } from './ci-actor.component';

describe('CIActorComponent', () => {
  let component: CIActorComponent;
  let fixture: ComponentFixture<CIActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CIActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CIActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
