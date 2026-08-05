import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  private idCounter = 1;

  create(createTodoDto: CreateTodoDto) {
    const newTodo: Todo = {
      id: this.idCounter,
      title: createTodoDto.title,
      description: createTodoDto.description,
      completed: createTodoDto.completed,
    };
    this.todos.push(newTodo);
    this.idCounter++;
    return newTodo;
  }
}
