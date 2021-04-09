import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

import { DashboardService } from '../dashboard.services';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit, AfterViewInit, OnDestroy {
  student = []; 
  data = [];
  studentSubmitted = false;
  studentForm : FormGroup;
  studentID : any;
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

    this.studentForm = this.formBuilder.group({
      f_name: ['', Validators.required],
      l_name: ['', Validators.required],
      reg_no: ['', Validators.required],
      roll_no: ['', Validators.required],
      email: ['', Validators.email],
      dob: ['', Validators.required],
      addr: ['', Validators.required],
      ph_no: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10) ]],
      gender:['',Validators.required],
      year: ['', Validators.required],
      dept:['',Validators.required],
      sem: ['', Validators.required]
    });
  }
  onCreate(form: NgForm) {    
    // this.componentStatusSub = this.masterService.getComponentStatusListener()
    // .subscribe(
    //   componentStatus => {
    //     this.isLoading = false;
    //   }
    // );
    if(this.studentForm.invalid) {
      this.studentSubmitted = true;
      return;
    } else {
      // this.isLoading = true;
      this.dashboardService.createStudent(this.studentForm.value)
      .then(student_res => {
        console.log(student_res);
        
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

}    





