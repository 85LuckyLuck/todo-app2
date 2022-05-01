import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskPage } from './task.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TaskPage,
        }
      ])],
  	declarations: [TaskPage],
  	providers: [],
  	exports: [] })
export class TaskPageModule {
}
