import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../entities/task';
import { concatAll, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  private checkTask(task: Task) {
    if (task == null) {
      console.error('Null task returned');
      return;
    }

    let existingTask = this.tasks.find(t => t.id === task.id);
    task.dueDate = new Date(task.dueDate); // Just converting to typescript date object

    if (existingTask) Object.assign(existingTask, task);
    else this.tasks.push(task);
  }

  getAll(): Task[] {
    this.http.get<Task[]>("http://localhost:9000/api/tasks")
      .pipe(concatAll())
      .subscribe(t => this.checkTask(t));
    
    return this.tasks;
  }

  deleteTask(id: number)  {
    this.http.delete("http://localhost:9000/api/tasks/"+id)
      .subscribe(t => {
        let index = this.tasks.findIndex(t => t.id === id);
        if (index < 0) return;
        this.tasks.splice(index, 1);
      },
      err => {
        console.error(err);
      },
      () => console.log('Delete completed'));
  }

  get(id: number, cb:(b: Task) => void = null): Task {
    let task = this.tasks.find(b => b.id==id) || null;
    if (id && id > 0) this.http.get<Task>("http://localhost:9000/api/tasks/"+id).pipe(shareReplay()).subscribe(t => {
      this.checkTask(t);
      Object.assign(task, t);
      console.log('answer from server');
      if (cb) cb(t);
    });

    console.log('return default'); // Just to clarify Rx.js observable
    return task;
  }

  save(task: Task): Observable<Task>{
    let ret = this.http.put<Task>("http://localhost:9000/api/tasks/"+task.id, task).pipe(shareReplay()); // shareReplay prevents multiple http requests
    ret.subscribe(t => this.checkTask(t));
    return ret;
  }

  create(task: Task): Observable<Task> {
    let newTask = new Task(task.name, task.description, task.importance, new Date(task.dueDate));
    console.log("Creating task", newTask);
    let ret = this.http.post<Task>("http://localhost:9000/api/tasks", newTask).pipe(shareReplay());
    ret.subscribe(t => this.checkTask(t));
    return ret;
  }
}
