import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtadmissionComponent } from './crtadmission.component';

describe('CrtadmissionComponent', () => {
  let component: CrtadmissionComponent;
  let fixture: ComponentFixture<CrtadmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrtadmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrtadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
