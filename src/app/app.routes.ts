import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { BusinessRegistrationComponent } from './pages/services/business-registration/business-registration.component';
import { GeneralSuppliesComponent } from './pages/services/general-supplies/general-supplies.component';
import { GeneralPrintingServicesComponent } from './pages/services/general-printing-services/general-printing-services.component';
import { ImportExportServicesComponent } from './pages/services/import-export-services/import-export-services.component';
import { ComputerSoftwareHardwareTrainingComponent } from './pages/services/computer-software-hardware-training/computer-software-hardware-training.component';
import { RealestateServicesComponent } from './pages/services/realestate-services/realestate-services.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services/business-registration', component: BusinessRegistrationComponent},
    {path: 'services/general-supplies', component: GeneralSuppliesComponent},
    {path: 'services/general-printing-services', component: GeneralPrintingServicesComponent},
    {path: 'services/import-export-services', component: ImportExportServicesComponent},
    {path: 'services/computer-software-hardware-training', component: ComputerSoftwareHardwareTrainingComponent},
    {path: 'services/realestate-services', component: RealestateServicesComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'contact', component: ContactComponent},
];