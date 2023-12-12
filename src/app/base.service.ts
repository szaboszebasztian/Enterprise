import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  headers= new HttpHeaders({
    'Access-Control-Allow Origin': '*', 
    'Access-' : '*',

  });

  url ="https://172.16.16.136:5193/api/Employees"

  employeeSub= new Subject()
  constructor(private http:HttpClient) {
    this.loadEmployees()
   }


   loadEmployees(){
    this.http.get(this.url).subscribe(
      (res)=>this.employeeSub.next(res)
    )
   }

  addEmployee(body:any){
    this.http.post(this.url,body)
  }
  UpdateEmployee(body:any){
    this.http.put(this.url,body)
  }

  deleteEmployee(body:any){
    this.http.delete(this.url+body.EmployeeId)
  }

  getEmployees(){
    return this.employeeSub
  }
}
