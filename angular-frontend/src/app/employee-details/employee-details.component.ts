import { Component, OnInit } from '@angular/core';
import { EmpolyeeService } from '../empolyee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{

  id!:number;
  employee:Employee = new Employee();
  constructor(private employeeService:EmpolyeeService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    },error => console.log(error))
  }

}
