import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateadmitcardComponent } from './generateadmitcard.component';

describe('GenerateadmitcardComponent', () => {
  let component: GenerateadmitcardComponent;
  let fixture: ComponentFixture<GenerateadmitcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateadmitcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateadmitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
