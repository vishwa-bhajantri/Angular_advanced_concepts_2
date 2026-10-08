import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TraditionalTwoWayChild } from './traditional-two-way-child/traditional-two-way-child';

@Component({
  imports: [TraditionalTwoWayChild, FormsModule],
  selector: 'app-traditional-two-way-parent',
  styleUrl: './traditional-two-way-parent.css',
  templateUrl: './traditional-two-way-parent.html',
})
export class TraditionalTwoWayParent {

  parentQuantity = 10;

  resetQuantity(){
    this.parentQuantity = 10;
  }
}
