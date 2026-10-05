import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-output-child',
  styleUrl: './output-child.css',
  templateUrl: './output-child.html',
})
export class OutputChild {

traditinalMessageText = "Hello World";

@Output() traditionalMessage = new EventEmitter<string>();

modernMessageText = output<string>();

sendMessageToParent() {
  this.traditionalMessage.emit(this.traditinalMessageText);

}

sendModernMessage(){

  this.modernMessageText.emit("this.traditinalMessageText");
}

}
