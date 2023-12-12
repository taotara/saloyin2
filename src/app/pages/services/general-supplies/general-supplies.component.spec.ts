import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSuppliesComponent } from './general-supplies.component';

describe('GeneralSuppliesComponent', () => {
  let component: GeneralSuppliesComponent;
  let fixture: ComponentFixture<GeneralSuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralSuppliesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
