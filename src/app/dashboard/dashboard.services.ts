import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { StudentData} from "./dashboard.data-model";
import { StaffData} from "./dashboard.data-model";
const BACKEND_URL = environment.apiUrl + "/dashboard";

@Injectable({ providedIn: "root" })
export class DashboardService {

  private componentStatusListener = new Subject<boolean>();
  
  getComponentStatusListener() {
    return this.componentStatusListener.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {}

  createStudent = async(obj:StudentData) => new Promise<any>((resolve, rejects) => {
    this.http.post(BACKEND_URL + "/dashboard/student", obj)
    .subscribe(
      response => {
          resolve(response);
      },
      error => {
        rejects(error);
      }
    );
  })

  // readStudent = async(query?: Object) => new Promise<any>((resolve, rejects) => {
  //   this.http.get<any>(BACKEND_URL + "/dashboard/student"+(query ? query :''))
  //   .subscribe(
  //     response => {
  //       resolve(response);
  //       console.log(response);
        
  //     },
  //     error => {
  //       rejects(error);
  //     }
  //   );
  // })

  createStaff = async(obj:StaffData) => new Promise<any>((resolve, rejects) => {
    this.http.post(BACKEND_URL + "/dashboard/staff", obj)
    .subscribe(
      response => {
          resolve(response);
      },
      error => {
        rejects(error);
      }
    );
  }) 
}