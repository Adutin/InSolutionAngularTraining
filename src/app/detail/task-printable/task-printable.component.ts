import { Component, Inject, OnInit } from '@angular/core';
import { Task } from 'src/app/entities/task';

@Component({
  selector: 'task-printable',
  templateUrl: './task-printable.component.html',
  styleUrls: ['./task-printable.component.css']
})
export class TaskPrintableComponent implements OnInit {

  task: Task;

  constructor(@Inject('taskData') private taskData) { }

  ngOnInit(): void {
    this.task = this.taskData.task;
  }

}
