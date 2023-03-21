import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsCapComponent } from './seats-cap.component';

describe('SeatsCapComponent', () => {
  let component: SeatsCapComponent;
  let fixture: ComponentFixture<SeatsCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatsCapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatsCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
