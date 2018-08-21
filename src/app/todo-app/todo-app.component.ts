import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Activity } from "./activity";

@Component({
  selector: "todo-app",
  templateUrl: "./todo-app.component.html",
  styleUrls: ["./todo-app.component.css"]
})
export class TodoAppComponent implements OnInit {
  static ID: number = 1;
  todoList: Object[] = [];
  todoForm: FormGroup;
  showList: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.todoForm = this.fb.group({
      activity: ""
    });
  }

  addToList(): void {
    this.showList = true;
    var activity = {
      id: TodoAppComponent.ID,
      activity: this.todoForm.get("activity").value
    };
    TodoAppComponent.ID++;
    this.todoList.push(activity);
    this.todoForm.reset(this.todoForm.get("activity"));
    console.log(JSON.stringify(this.todoList));
  }
}
