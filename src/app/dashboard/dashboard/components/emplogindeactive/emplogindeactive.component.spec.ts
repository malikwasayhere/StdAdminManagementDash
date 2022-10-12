import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplogindeactiveComponent } from './emplogindeactive.component';

describe('EmplogindeactiveComponent', () => {
  let component: EmplogindeactiveComponent;
  let fixture: ComponentFixture<EmplogindeactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplogindeactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplogindeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
