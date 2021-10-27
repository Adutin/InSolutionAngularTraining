import { Component, OnInit } from '@angular/core';
import { ImportanceClass, Task } from '../entities/task';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

 /* tasks: Task[] = [new Task('Pay bills', 'Costs too much', ImportanceClass.High, new Date('2021-11-04, 09:00')),
                  new Task('Eat', 'To live longer', ImportanceClass.High, new Date('2021-10-04, 09:00')),
                  new Task('Fix code', 'If you can', ImportanceClass.Low, new Date('2021-12-04, 08:00'))]; */

  tasks: Task[] = [];

  ImportanceClass = ImportanceClass;

  nameFilter: string = '';
  descriptionFilter: string = '';
  sortField: string = 'id';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.tasks = this.todoService.getAll();
  }

  canShow(task: Task): boolean {
    return task.name.toLocaleUpperCase().includes(this.nameFilter.toLocaleUpperCase())
    && task.description.toLocaleUpperCase().includes(this.descriptionFilter.toLocaleUpperCase());
  }

  isDueDatePassed(dueDate: Date): boolean {
    const currentTime = new Date();
    return dueDate < currentTime;
  }

  isOdd(o: boolean): string {
    return o ? 'lightgray' : 'white';
  }

  deleteTask(task: Task) {
    this.todoService.deleteTask(task.id);
  }

}
