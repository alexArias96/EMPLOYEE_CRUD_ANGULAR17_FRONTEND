import { Component, OnInit, inject } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Employee } from '../model/employee.interfaces';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    DatePipe,
    RouterModule
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export default class EmployeeListComponent implements OnInit{

  private employeeService = inject(EmployeeService)  
  
  employees: Employee[]= [];
  
  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(){
    this.employeeService.list()
    .subscribe(employees => {
      this.employees = employees;
      console.log(this.employees);
    });
    console.log(this.employees);
  }

  deleteEmployee(employee: Employee){
    this.employeeService.delete(employee.employeeId)
    .subscribe(
      () => {
        this.loadAll();
      }
    )
  }
}
