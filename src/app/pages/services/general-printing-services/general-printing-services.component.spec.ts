import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPrintingServicesComponent } from './general-printing-services.component';

describe('GeneralPrintingServicesComponent', () => {
  let component: GeneralPrintingServicesComponent;
  let fixture: ComponentFixture<GeneralPrintingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralPrintingServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralPrintingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
