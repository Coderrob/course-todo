import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../models/todo";
import { Observable } from "rxjs";
import * as _ from "lodash";
import { map } from "rxjs/operators";

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAllTodos(): Observable<Todo[]> {
    return this.http.get(`${API_URL}/todo`).pipe(
      map((response) => {
        const todos = _.values(response);
        return todos.map((todo) => new Todo(todo));
      })
    );
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.http.post(`${API_URL}/todo`, todo).pipe(
      map((response) => {
        return new Todo(response);
      })
    );
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return this.http.get(`${API_URL}/todo/${todoId}`).pipe(
      map((response) => {
        return new Todo(response);
      })
    );
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put(`${API_URL}/todo/${todo.id}`, todo).pipe(
      map(() => {
        return todo;
      })
    );
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return this.http.delete(`${API_URL}/todo/${todoId}`).pipe(map(() => null));
  }
}
