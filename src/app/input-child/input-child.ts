import { Component, input, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-input-child',
  styleUrl: './input-child.css',
  templateUrl: './input-child.html',
})
export class InputChild {


  // @Input({required: true, alias: 'employeeName'}) traditionalEmployeeName = "";
  traditionalEmployeeName = input<string, string>("", {alias: 'employeeName', transform: ((value: string) => value.trim().toUpperCase())});
  
  // @Input() traditionalEmployeeRole = "";
  traditionalEmployeeRole = input<string>();
}
