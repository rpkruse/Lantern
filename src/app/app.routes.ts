/*
  Standard routing service
*/
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { AboutComponent } from './about/about.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'about', component: AboutComponent }
];