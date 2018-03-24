import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
