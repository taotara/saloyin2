import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerSoftwareHardwareTrainingComponent } from './computer-software-hardware-training.component';

describe('ComputerSoftwareHardwareTrainingComponent', () => {
  let component: ComputerSoftwareHardwareTrainingComponent;
  let fixture: ComponentFixture<ComputerSoftwareHardwareTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerSoftwareHardwareTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerSoftwareHardwareTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
