import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TodoPage } from './todo.page';
import { TodoService } from './service/todo.service';
import { TodoDetailsPage } from './details/todo.details.page';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: TodoPage,
            },
            {
                path: 'new',
                component: TodoDetailsPage
            },
            {
                path: 'details/:id',
                component: TodoDetailsPage
            },
            {
                path: 'edit/:id',
                component: TodoPage
            }
        ])
    ],
    declarations: [
        TodoPage,
        TodoDetailsPage
    ],
    providers: [TodoService]
})
export class TodoModule { }
