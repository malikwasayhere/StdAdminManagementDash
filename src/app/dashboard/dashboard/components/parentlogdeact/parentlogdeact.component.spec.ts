import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentlogdeactComponent } from './parentlogdeact.component';

describe('ParentlogdeactComponent', () => {
  let component: ParentlogdeactComponent;
  let fixture: ComponentFixture<ParentlogdeactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentlogdeactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentlogdeactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
