import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcardtemplateComponent } from './idcardtemplate.component';

describe('IdcardtemplateComponent', () => {
  let component: IdcardtemplateComponent;
  let fixture: ComponentFixture<IdcardtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdcardtemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdcardtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
