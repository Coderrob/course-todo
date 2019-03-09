import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../models/todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html"
})
export class TodoItemComponent {
  @Input()
  todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
