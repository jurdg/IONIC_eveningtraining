import { Component } from '@angular/core';
import { TodoService } from './service/todo.service';
import { ReplaySubject } from 'rxjs';
import { Todo } from './models/todo.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-todo',
    templateUrl: 'todo.page.html',
    styleUrls: ['todo.page.scss'],
})
export class TodoPage {

    public todos$: ReplaySubject<Todo[]>;

    constructor(
        private readonly todoService: TodoService,
        private readonly router: Router) {
        this.todos$ = todoService.todos$;
    }

    public removeTodo(id: string): void {
        this.todoService.removeTodo(id);
    }
}
