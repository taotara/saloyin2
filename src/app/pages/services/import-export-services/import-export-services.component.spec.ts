import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportServicesComponent } from './import-export-services.component';

describe('ImportExportServicesComponent', () => {
  let component: ImportExportServicesComponent;
  let fixture: ComponentFixture<ImportExportServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportExportServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportExportServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
