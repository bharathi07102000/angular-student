import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AgmCoreModule
} from '@agm/core';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutes } from './dashboard.routing';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        })
    ],
    declarations: [DashboardComponent, StudentComponent, StaffComponent],
   
})

export class DashboardModule {}
