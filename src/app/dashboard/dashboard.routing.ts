import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';

export const DashboardRoutes: Routes = [{
  path: '',
    children: [ {
      path: 'dashboard',
      component: DashboardComponent
  }]
  
},{
  path: 'dashboard',
    children: [ {
      path: 'student',
      component: StudentComponent
}]
},{
  path: 'dashboard',
    children: [ {
      path: 'staff',
      component: StaffComponent
}]
}
];