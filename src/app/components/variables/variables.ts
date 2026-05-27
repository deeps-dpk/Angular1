import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.scss',
})

//Above component block is called Component Decorator

export class Variables {

  courseName:string="PRADEEP";
  currentVersion = "Angular 21";

  rollNo:number = 1353;
  currentDate: Date = new Date();

  isActive:boolean = false;
  isPresent = true;

  cityList:string[]=["Mumbai", "Delhi", "Goa"];
  rollNoList:number[] = [1111, 2222, 1231];

  studentObj ={
     name: "Abc",
     rollNo: 112233, 
     email: "Abc@gmail.com"
  }
  
  studentList = [
    {
      name: "Abc",
      rollNo: 112233, 
      email: "Abc@gmail.com"
    },
    {
      name: "Abc",
      rollNo: 112233, 
      email: "Abc@gmail.com"
    },
    {
      name: "Abc",
      rollNo: 112233, 
      email: "Abc@gmail.com"
    }
  ]

}
