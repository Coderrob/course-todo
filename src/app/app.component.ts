import { Component, OnInit } from "@angular/core";
import { Todo } from "./models/todo";
import { TodoService } from "./services/todo.service";
import { AppInsightsService } from "@markpieszak/ng-application-insights";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [TodoService, AppInsightsService],
})
export class AppComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private appInsightsService: AppInsightsService
  ) {
    this.appInsightsService.trackPageView("TodoMain");
  }

  todos: Todo[] = [];

  public ngOnInit() {
    this.appInsightsService.trackPageView("TodoMain");
    this.todoService.getAllTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  onAddTodo(todo) {
    this.appInsightsService.trackEvent(`Adding todo ${todo.id} '${todo.task}'`);
    this.todoService.addTodo(todo).subscribe((newTodo) => {
      this.todos = this.todos.concat(newTodo);
    });
  }

  onToggleTodoComplete(todo) {
    this.appInsightsService.trackEvent(
      `Marking todo ${todo.id} complete ${todo.complete}`
    );
    this.todoService.toggleTodoComplete(todo).subscribe((updatedTodo) => {
      todo = updatedTodo;
    });
  }

  onRemoveTodo(todo) {
    this.appInsightsService.trackEvent(`Removing todo ${todo.id}`);
    this.todoService.deleteTodoById(todo.id).subscribe((_) => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }
}
