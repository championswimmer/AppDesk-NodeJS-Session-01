import { Controller, Get, Post } from '@nestjs/common';
import { Todo, TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get('/')
  getTodos(): Array<Todo> {
    return this.todosService.getAllTodos();
  }

  @Post('/')
  addTodo(): string {
    this.todosService.addTodo('A new Todo ' + Math.random());
    return 'SUCCESS';
  }
}
