import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

import { DashboardService } from '../dashboard.services';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})

export class StaffComponent implements OnInit, AfterViewInit, OnDestroy {
  staff = []; 
  data = [];
  staffSubmitted = false;
  staffForm : FormGroup;
  staffID : any;
  componentStatusSub: any;
  btnObj = [
    { label: "Create", method: "onCreate" },
    { label: "Update", method: "onUpdate" }
  ];
  btnButton : any;

  notValidObjIndex = [];

  constructor(private formBuilder: FormBuilder, private dashboardService: DashboardService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.btnButton = this.btnObj[0];

    this.staffForm = this.formBuilder.group({
      f_name: ['', Validators.required],
      l_name: ['', Validators.required],
      email: ['', Validators.email],
      dob: ['', Validators.required],
      addr: ['', Validators.required],
      ph_no: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10) ]],
      gender:['',Validators.required],
      dept:['',Validators.required],
    });
  }
  onCreate(form: NgForm) {    
    
    if(this.staffForm.invalid) {
      this.staffSubmitted = true;
      return;
    } else {
      // this.isLoading = true;
      this.dashboardService.createStudent(this.staffForm.value)
      .then(staff_res => {
        console.log(staff_res);
        
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

}    
