import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/modules/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 'sdsdsdsadasdsadsadsasadsdsd',
      name: 'Sachith',
      email: 'sachith@gmail.com',
      phone: 25325555,
      salary: 30000,
      department: 'human resources',
    },
    {
      id: 'sdsdsdsadasdsadsadsasdffd',
      name: 'namal kumara',
      email: 'namal@gmail.com',
      phone: 25355555,
      salary: 60000,
      department: 'Information tecnology',
    },
  ];

  constructor() {}
  ngOnInit(): void {
    this.employees.push();
  }
}
