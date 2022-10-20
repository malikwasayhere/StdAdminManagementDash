import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitcardtemplateComponent } from './admitcardtemplate.component';

describe('AdmitcardtemplateComponent', () => {
  let component: AdmitcardtemplateComponent;
  let fixture: ComponentFixture<AdmitcardtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmitcardtemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmitcardtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
