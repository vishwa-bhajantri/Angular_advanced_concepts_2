import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-traditional-two-way-child',
  styleUrl: './traditional-two-way-child.css',
  templateUrl: './traditional-two-way-child.html',
})
export class TraditionalTwoWayChild {

  // @Input () childQuantity !: number;

  // //InputName + 'Change'
  // @Output () childQuantityChange = new EventEmitter<number>();

  // increaseQuantity(){
  //   this.childQuantityChange.emit(this.childQuantity + 1);
  // }

  // decreaseQuantity(){
  //   this.childQuantityChange.emit(this.childQuantity - 1);
  // }


  //Using Model()

childQuantity = model(0);

  increaseQuantity(){
    this.childQuantity.update((quantityNumber) => quantityNumber + 1);
  }

  decreaseQuantity(){
    this.childQuantity.update((quantityNumber) => quantityNumber - 1);
  }
}

