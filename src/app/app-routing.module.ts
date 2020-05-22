import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ValidatorComponent } from './pages/validator/validator.component';
import { SecretComponent } from './pages/secret/secret.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { AddComponent } from './pages/add/add.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'validator', component: ValidatorComponent },
      { path: 'secret', component: SecretComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'add', component: AddComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
