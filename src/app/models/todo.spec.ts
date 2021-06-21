import { Todo } from "./todo";

describe("Todo", () => {
  it("should create an instance", () => {
    expect(new Todo()).toBeTruthy();
  });

  it("should create new todo", () => {
    const todo = new Todo({
      task: "hello",
      complete: true,
    });
    expect(todo.task).toEqual("hello");
    expect(todo.complete).toEqual(true);
  });
});
