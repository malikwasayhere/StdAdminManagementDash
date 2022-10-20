import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatetemplateComponent } from './certificatetemplate.component';

describe('CertificatetemplateComponent', () => {
  let component: CertificatetemplateComponent;
  let fixture: ComponentFixture<CertificatetemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatetemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
