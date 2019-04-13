import { Component, OnInit, Input } from "@angular/core";
import { IStudent } from "../models/student";

@Component({
  selector: "app-student-item",
  templateUrl: "./student-item.component.html",
  styleUrls: ["./student-item.component.css"]
})
export class StudentItemComponent implements OnInit {
  @Input() student: IStudent;

  constructor() {}

  ngOnInit() {}
}
