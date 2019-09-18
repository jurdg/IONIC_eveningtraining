import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class TodoService {

    public todos$ = new ReplaySubject<Todo[]>(1);
    private todos: Todo[] = [];
    private todoCounter = 0;

    constructor() { }

    public getById(id: string): Todo {
        return this.todos.find(todo => todo.id === id);
    }

    public saveTodo(todo: Todo): Todo {
        if (todo.id)
            return this.updateTodo(todo);
        else
            return this.addTodo(todo);
    }

    public removeTodo(id: string): void {
        this.todos = this.todos.filter(todo => todo.id !== id);

        this.notify();
    }

    private addTodo(todo: Todo): Todo {
        todo.id = this.generateId();
        this.todos.push(todo);

        this.notify();
        return todo;
    }

    private updateTodo(todo: Todo): Todo {
        console.log('upgedatetetetetet');
        return todo;
    }


    private notify(): void {
        this.todos$.next(this.todos);
    }

    private generateId(): string {
        return `id${++this.todoCounter}`;
    }
}
