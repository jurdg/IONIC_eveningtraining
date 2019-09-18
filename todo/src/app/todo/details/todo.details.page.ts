import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/todo.model';

@Component({
    templateUrl: './todo.details.page.html',
    styleUrls: ['./todo.details.page.scss']
})
export class TodoDetailsPage {

    public todo: Todo;
    public isEditing: boolean;

    private backUp: Todo;

    constructor(
        private activatedRoute: ActivatedRoute,
        private readonly todoService: TodoService,
        private router: Router) {

        const id = this.activatedRoute.snapshot.paramMap.get('id');

        this.todo = todoService.getById(id);
        if (this.todo)
            this.backUp = this.todo;
        else
            this.todo = new Todo();
    }

    public save(): void {
        this.todoService.saveTodo(this.todo);
        this.router.navigateByUrl('todo');
    }

    public cancelTodo(): void {
        if (this.backUp)
            this.todoService.saveTodo(this.backUp);
        this.router.navigateByUrl('todo');
    }
}
