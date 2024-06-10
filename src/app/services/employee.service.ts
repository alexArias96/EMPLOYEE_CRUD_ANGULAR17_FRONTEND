import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Employee } from '../model/employee.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private http = inject(HttpClient);

  list(){
    return this.http.get<Employee[]>('http://localhost:8080/api/employee');
  }

  get(id: number){
    return this.http.get<Employee>('http://localhost:8080/api/employee/' + id);
  }

  create(employee: Employee){
    return this.http.post<Employee>('http://localhost:8080/api/employee/create', employee);
  }

  update(id: number, employee: Employee){
    return this.http.put<Employee>('http://localhost:8080/api/employee/' + id, employee);
  }

  delete(id: number){
    return this.http.delete<void>('http://localhost:8080/api/employee/' + id);
  }
}
