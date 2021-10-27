import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskEditableComponent } from './task-editable/task-editable.component';
import { TaskPrintableComponent } from './task-printable/task-printable.component';
import { DetailContainerComponent } from './detail-container/detail-container.component';

const childRoutes = [
  { path: 'task/:id', component: DetailContainerComponent,
    children: [
      { path: '', component: TaskEditableComponent},
      { path: 'printable', component: TaskPrintableComponent }
    ]}
]

@NgModule({
  declarations: [TaskEditableComponent, TaskPrintableComponent, DetailContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class DetailModule { }
