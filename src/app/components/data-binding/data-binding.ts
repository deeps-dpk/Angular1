import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {

  courseName = "Angular -v 21 Tutorials";

  className="primary";

  inputType="Date"
showWelcomeMessage()
{
alert("Welcome to Angular 21")
}
 onStateChanged()
 {
  alert("State has been changed")
 }
 changeCourseName(text:string)
 {
this.courseName=text;
 }
}
