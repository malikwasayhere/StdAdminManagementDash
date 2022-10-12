import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindeactiveComponent } from './logindeactive.component';

describe('LogindeactiveComponent', () => {
  let component: LogindeactiveComponent;
  let fixture: ComponentFixture<LogindeactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindeactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogindeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
