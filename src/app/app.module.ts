import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ValidatorComponent } from './pages/validator/validator.component';

import { PortisService } from './services/portis.service';
import { ContractService } from './services/contract.service';
import { SecretComponent } from './pages/secret/secret.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { AddComponent } from './pages/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SecretComponent,
    NotificationComponent,
    AddComponent,
    ValidatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers:[
    PortisService,
    ContractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
