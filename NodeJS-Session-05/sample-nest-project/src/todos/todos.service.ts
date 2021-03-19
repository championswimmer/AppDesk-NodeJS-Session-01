import { Injectable } from '@nestjs/common';

export interface Todo {
  title: string;
  due: Date;
  completed: boolean;
}

@Injectable()
export class TodosService {
  todos: Array<Todo> = [];

  getAllTodos() {
    return this.todos;
  }

  addTodo(taskTitle: string) {
    this.todos.push({
      title: taskTitle,
      due: new Date(Date.now()),
      completed: false,
    });
  }
}
