import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TodoAppComponent } from "./todo-app/todo-app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [AppComponent, TodoAppComponent, TodoListComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
