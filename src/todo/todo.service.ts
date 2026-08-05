import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  private idCounter = 1;
  private findTodoOrThrow(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo #${id} not found`);
    }
    return todo;
  }

  create(createTodoDto: CreateTodoDto) {
    const newTodo: Todo = {
      id: this.idCounter,
      title: createTodoDto.title,
      description: createTodoDto.description ?? '',
      completed: createTodoDto.completed ?? false,
    };
    this.todos.push(newTodo);
    this.idCounter++;
    return newTodo;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return this.findTodoOrThrow(id);
  }
  update(id: number, updateTodoDto: UpdateTodoDto) {
    this.findTodoOrThrow(id);
    const index = this.todos.findIndex((todo) => todo.id === id);
    return (this.todos[index] = { ...this.todos[index], ...updateTodoDto });
  }
  remove(id: number) {
    this.findTodoOrThrow(id);
    const newTodo = this.todos.filter((todo) => todo.id !== id);
    return (this.todos = newTodo);
  }
}
