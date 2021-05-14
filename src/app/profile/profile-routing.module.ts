import { PersonalDataComponent } from './personal-data.component';
import { ProfileGuard } from './../guards/profile.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [ProfileGuard],
    canActivateChild: [ProfileGuard],
    children: [
      {
        path: '',
        component: PersonalDataComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'setting',
        component: SettingsComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
