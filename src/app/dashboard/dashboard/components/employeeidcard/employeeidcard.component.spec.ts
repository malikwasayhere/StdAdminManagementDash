import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeidcardComponent } from './employeeidcard.component';

describe('EmployeeidcardComponent', () => {
  let component: EmployeeidcardComponent;
  let fixture: ComponentFixture<EmployeeidcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeidcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
