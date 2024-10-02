import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ComponentModule } from 'app/shared/components/components.module';



@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ]
})
export class AdminModule { }
