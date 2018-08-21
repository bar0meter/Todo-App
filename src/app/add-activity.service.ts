import { Injectable } from "@angular/core";
import { IActivity } from "./todo-app/activity";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AddActivityService {
  private todoList: IActivity[] = [];
  constructor() {}

  getActivity() {
    return this.todoList;
  }

  setActivity(activity: IActivity) {
    this.todoList.push(activity);
  }
}
