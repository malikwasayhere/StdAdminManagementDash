import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleimportComponent } from './multipleimport.component';

describe('MultipleimportComponent', () => {
  let component: MultipleimportComponent;
  let fixture: ComponentFixture<MultipleimportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleimportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
