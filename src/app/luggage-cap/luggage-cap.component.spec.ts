import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuggageCapComponent } from './luggage-cap.component';

describe('LuggageCapComponent', () => {
  let component: LuggageCapComponent;
  let fixture: ComponentFixture<LuggageCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuggageCapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuggageCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
