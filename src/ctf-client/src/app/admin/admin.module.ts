import { AdminGuard } from '../shared/guard/admin.guard';
import { StatisticsComponent } from './statistics/statistics.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin/admin/admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { AdminUsersComponent } from '../admin/admin-users/admin-users.component';
import { SharedModule } from '../shared/shared.module';
import { NewUserComponent } from './new-user/new-user.component';



const routes : Routes = [
  { path : '', component : AdminComponent, canActivateChild : [AdminGuard],
  children : [
    { path : '', redirectTo : 'statistics' },
    { path : 'statistics', component : StatisticsComponent },
    { path : 'users', component : AdminUsersComponent },
    { path : 'users/new', component : NewUserComponent },
  ]}
]

@NgModule({
  declarations: [
    AdminComponent,
    NavbarAdminComponent,
    StatisticsComponent,
    AdminUsersComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
