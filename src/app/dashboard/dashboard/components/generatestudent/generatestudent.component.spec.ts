import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratestudentComponent } from './generatestudent.component';

describe('GeneratestudentComponent', () => {
  let component: GeneratestudentComponent;
  let fixture: ComponentFixture<GeneratestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratestudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
