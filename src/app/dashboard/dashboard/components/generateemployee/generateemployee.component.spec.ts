import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateemployeeComponent } from './generateemployee.component';

describe('GenerateemployeeComponent', () => {
  let component: GenerateemployeeComponent;
  let fixture: ComponentFixture<GenerateemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
