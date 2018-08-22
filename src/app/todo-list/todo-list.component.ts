import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  @Input()
  activity;

  @Output()
  deleteActivity = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.deleteActivity.emit(this.activity.id);
  }
}
