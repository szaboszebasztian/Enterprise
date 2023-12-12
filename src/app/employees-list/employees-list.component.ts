import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  alkLista:any


  constructor(private base:BaseService){
    this.base.getEmployees().subscribe(
      (res)=> this.alkLista=res
    )
  }

}
