import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IStudent } from "../models/student";

@Component({
  selector: "app-student-managment",
  templateUrl: "./student-managment.component.html",
  styleUrls: ["./student-managment.component.css"]
})
export class StudentManagmentComponent implements OnInit {
  studentForm: FormGroup;
  student: IStudent;

  constructor(f: FormBuilder) {
    this.studentForm = f.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      persNo: ["", Validators.required]
    });
  }

  ngOnInit() {}

  submitForm(form: FormGroup) {
    if (form.valid) {
      let controls = form.controls;
      this.student = {
        firstName: controls["firstName"].value,
        lastName: controls["lastName"].value,
        perNO: controls["persNo"].value
      };
    }

    console.log(this.student);
  }
}
