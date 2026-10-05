import { Component } from '@angular/core';
import { OutputChild } from './output-child/output-child';

@Component({
  imports: [OutputChild],
  selector: 'app-output-parent',
  styleUrl: './output-parent.css',
  templateUrl: './output-parent.html',
})
export class OutputParent {

  recieveTraditionalMessage: string = "No message received yet";
  recievingTraditionalOutput(message: any) {
    // console.log(message);

    this.recieveTraditionalMessage = message;

  }

  recievingModernOutput(message: any) {
    this.recieveTraditionalMessage = message;
}
}
